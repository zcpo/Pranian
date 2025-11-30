'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { ADMIN_EMAILS } from '@/lib/admins';
import { Loader2, Users, UserCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

type AppUser = {
    id: string;
    displayName: string;
    email: string;
    avatarUrl?: string;
    role?: 'user' | 'admin' | 'super_admin';
    createdAt: any;
};

function UserRow({ user }: { user: AppUser }) {
    const userInitial = user.displayName?.charAt(0) || user.email?.charAt(0) || '?';
    const creationDate = user.createdAt?.toDate ? user.createdAt.toDate().toLocaleDateString() : 'N/A';

    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage src={user.avatarUrl} alt={user.displayName} />
                    <AvatarFallback>{userInitial.toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                    <Link href={`/profile/${user.id}`} className="font-semibold hover:underline">{user.displayName || 'Unnamed User'}</Link>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                {user.role && <Badge variant={user.role === 'super_admin' ? 'destructive' : (user.role === 'admin' ? 'secondary' : 'outline')}>{user.role}</Badge>}
                <div className="text-right">
                    <p className="text-sm text-muted-foreground">Joined</p>
                    <p className="text-sm font-medium">{creationDate}</p>
                </div>
            </div>
        </div>
    )
}

export default function UserManagementPage() {
  const { user: currentUser, isUserLoading } = useUser();
  const router = useRouter();
  const firestore = useFirestore();

  const isAdmin = currentUser && ADMIN_EMAILS.includes(currentUser.email || '');

  useEffect(() => {
    if (!isUserLoading && !isAdmin) {
      router.push('/login?redirect=/admin/users');
    }
  }, [currentUser, isUserLoading, isAdmin, router]);

  const usersQuery = useMemoFirebase(() => 
    firestore ? query(collection(firestore, 'users'), orderBy('createdAt', 'desc')) : null
  , [firestore]);

  const { data: users, isLoading: isUsersLoading } = useCollection<AppUser>(usersQuery);

  if (isUserLoading || !isAdmin) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:py-16">
        <div className="mb-8">
            <h1 className="text-3xl font-bold font-headline flex items-center gap-3"><Users className="h-8 w-8" />User Management</h1>
            <p className="text-muted-foreground mt-2">View and manage all users in the application.</p>
        </div>
        
        <Card>
            <CardHeader>
                <CardTitle>All Users</CardTitle>
                <CardDescription>Found {users?.length ?? 0} user(s).</CardDescription>
            </CardHeader>
            <CardContent>
                {isUsersLoading ? (
                    <div className="flex justify-center py-8">
                        <Loader2 className="h-8 w-8 animate-spin" />
                    </div>
                ) : users && users.length > 0 ? (
                    <div className="divide-y">
                        {users.map(user => <UserRow key={user.id} user={user} />)}
                    </div>
                ) : (
                    <div className="text-center py-8 text-muted-foreground">
                        <UserCircle className="h-12 w-12 mx-auto mb-4" />
                        <p>No users found.</p>
                    </div>
                )}
            </CardContent>
        </Card>
    </div>
  );
}
