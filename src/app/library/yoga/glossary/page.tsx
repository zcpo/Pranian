
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const terms = [
    { term: "Asana", definition: "A physical posture or pose in yoga." },
    { term: "Pranayama", definition: "The practice of breath control in yoga." },
    { term: "Namaste", definition: "A respectful greeting often used at the beginning and end of a yoga class." },
    { term: "Vinyasa", definition: "A style of yoga characterized by stringing postures together so that you move from one to another, seamlessly, using breath." },
    { term: "Mudra", definition: "A symbolic hand gesture used in yoga and meditation." },
    { term: "Mantra", definition: "A word, sound, or phrase repeated to aid concentration in meditation." },
    { term: "Adho Mukha Svanasana", definition: "Downward-Facing Dog pose." },
    { term: "Ahimsa", definition: "Non-harming, the first of the Yamas (ethical principles)." },
    { term: "Ajna Chakra", definition: "The third-eye chakra, related to intuition and perception." },
    { term: "Anahata Chakra", definition: "The heart chakra, associated with love, compassion, and connection." },
    { term: "Ananda", definition: "Bliss or divine joy." },
    { term: "Aparigraha", definition: "Non-possessiveness or non-grasping, one of the Yamas." },
    { term: "Ardha", definition: "Half. Often used as a prefix for pose names, like Ardha Chandrasana (Half Moon Pose)." },
    { term: "Asteya", definition: "Non-stealing, one of the Yamas." },
    { term: "Ashtanga", definition: "Literally 'eight limbs.' A specific, physically demanding style of yoga, or referring to the eight limbs of yoga described by Patanjali." },
    { term: "Avidya", definition: "Ignorance or misconception; the root cause of suffering in yogic philosophy." },
    { term: "Ayurveda", definition: "The traditional Hindu system of medicine, based on the idea of balance in bodily systems." },
    { term: "Baddha", definition: "Bound. Often used in pose names like Baddha Konasana (Bound Angle Pose)." },
    { term: "Bandha", definition: "An energetic body lock used to control and direct prana (life force energy)." },
    { term: "Bhagavad Gita", definition: "An ancient Indian scripture that is a key text of Hinduism and yoga philosophy." },
    { term: "Bhakti Yoga", definition: "The path of devotion; one of the main paths of yoga." },
    { term: "Bodhi", definition: "Enlightenment or awakening." },
    { term: "Brahmacharya", definition: "Moderation or right use of energy; one of the Yamas." },
    { term: "Chakra", definition: "Energy centers in the subtle body. There are seven main chakras." },
    { term: "Chandra", definition: "Moon. Used in Chandra Namaskar (Moon Salutation)." },
    { term: "Chaturanga Dandasana", definition: "Four-Limbed Staff Pose, a yoga push-up." },
    { term: "Darshana", definition: "A philosophical viewpoint or system of thought." },
    { term: "Dharma", definition: "One's duty, purpose, or path in life." },
    { term: "Dhyana", definition: "Meditation, the seventh limb of Ashtanga yoga." },
    { term: "Dosha", definition: "In Ayurveda, the three energies (Vata, Pitta, Kapha) believed to circulate in the body." },
    { term: "Drishti", definition: "A focused gaze used during asana practice to cultivate concentration." },
    { term: "Dukkha", definition: "Suffering or dissatisfaction." },
    { term: "Eka", definition: "One. Often used as a prefix in pose names, like Eka Pada Rajakapotasana (One-Legged King Pigeon Pose)." },
    { term: "Guru", definition: "A spiritual teacher who dispels darkness (ignorance)." },
    { term: "Hatha", definition: "A general term for the physical practice of yoga. 'Ha' means sun and 'tha' means moon." },
    { term: "Ida Nadi", definition: "The subtle energy channel associated with the left side of the body and the moon's cooling energy." },
    { term: "Ishvara", definition: "The Supreme Being or a personal god." },
    { term: "Ishvara Pranidhana", definition: "Surrender to a higher power, one of the Niyamas." },
    { term: "Jalandhara Bandha", definition: "The throat lock, one of the main bandhas." },
    { term: "Jnana Yoga", definition: "The path of knowledge or wisdom." },
    { term: "Jivamukti", definition: "A modern style of yoga that incorporates vinyasa flow with spiritual teachings and chanting." },
    { term: "Kapalabhati", definition: "Skull-shining breath, a cleansing and energizing pranayama technique." },
    { term: "Karma", definition: "The law of cause and effect; the sum of a person's actions and their consequences." },
    { term: "Karma Yoga", definition: "The path of selfless action." },
    { term: "Kirtan", definition: "A devotional practice of call-and-response chanting." },
    { term: "Kleshas", definition: "The five 'poisons' or afflictions of the mind that are the cause of suffering: ignorance, ego, attachment, aversion, and clinging to life." },
    { term: "Koshas", definition: "The five 'sheaths' or layers of the self, from the physical body to the bliss body." },
    { term: "Kriya", definition: "A cleansing or purification technique in yoga." },
    { term: "Kumbhaka", definition: "Breath retention in pranayama." },
    { term: "Kundalini", definition: "Dormant spiritual energy coiled at the base of the spine." },
    { term: "Lila", definition: "Divine play or cosmic dance." },
    { term: "Malasana", definition: "Garland Pose or a low squat." },
    { term: "Mandala", definition: "A spiritual and ritual symbol in Hinduism and Buddhism, representing the universe." },
    { term: "Manipura Chakra", definition: "The solar plexus chakra, associated with personal power and self-esteem." },
    { term: "Maya", definition: "The illusion or deceptive appearance of the material world." },
    { term: "Moksha", definition: "Liberation from the cycle of death and rebirth (samsara)." },
    { term: "Mula Bandha", definition: "The root lock, engaging the pelvic floor." },
    { term: "Muladhara Chakra", definition: "The root chakra, associated with grounding and stability." },
    { term: "Nadi", definition: "Subtle energy channels in the body through which prana flows." },
    { term: "Nadi Shodhana", definition: "Alternate nostril breathing, a pranayama technique for balancing energy." },
    { term: "Niyamas", definition: "The five observances or internal disciplines in yoga: purity, contentment, self-discipline, self-study, and surrender." },
    { term: "Om", definition: "A sacred sound and spiritual icon, considered the sound of the universe." },
    { term: "Pada", definition: "Foot or leg." },
    { term: "Padma", definition: "Lotus. Used in Padmasana (Lotus Pose)." },
    { term: "Parivrtta", definition: "Revolved or twisted." },
    { term: "Patanjali", definition: "The sage who compiled the Yoga Sutras, a foundational text of yoga philosophy." },
    { term: "Pingala Nadi", definition: "The subtle energy channel associated with the right side of the body and the sun's heating energy." },
    { term: "Pitta", definition: "One of the three doshas in Ayurveda, associated with fire and water elements." },
    { term: "Pooja", definition: "A ritual of worship or offering." },
    { term: "Prakriti", definition: "The essential nature of matter or the primal creative force." },
    { term: "Prana", definition: "Life force energy that flows through all living things." },
    { term: "Pranidhana", definition: "Surrender or devotion." },
    { term: "Pratyahara", definition: "Withdrawal of the senses, the fifth limb of Ashtanga yoga." },
    { term: "Purusha", definition: "The pure, eternal consciousness or the true Self." },
    { term: "Raja Yoga", definition: "The 'royal path' of yoga, often synonymous with the Ashtanga system of Patanjali." },
    { term: "Sadhana", definition: "A dedicated spiritual practice." },
    { term: "Sahasrara Chakra", definition: "The crown chakra, associated with spiritual connection and enlightenment." },
    { term: "Samadhi", definition: "A state of profound meditative absorption; the final limb of Ashtanga yoga." },
    { term: "Samsara", definition: "The cycle of death and rebirth to which life in the material world is bound." },
    { term: "Samskara", definition: "Mental impressions or psychological imprints left by past experiences." },
    { term: "Santosha", definition: "Contentment, one of the Niyamas." },
    { term: "Satya", definition: "Truthfulness, one of the Yamas." },
    { term: "Saucha", definition: "Purity or cleanliness, one of the Niyamas." },
    { term: "Savasana", definition: "Corpse Pose, the final resting pose in a yoga class." },
    { term: "Shakti", definition: "The divine feminine creative power or energy." },
    { term: "Shanti", definition: "Peace." },
    { term: "Shiva", definition: "A principal deity of Hinduism, representing the destroyer and transformer." },
    { term: "Sitali", definition: "Cooling breath, a pranayama technique involving curling the tongue." },
    { term: "Sthira", definition: "Steadiness and stability." },
    { term: "Sukha", definition: "Ease or comfort." },
    { term: "Surya", definition: "Sun. Used in Surya Namaskar (Sun Salutation)." },
    { term: "Sushumna Nadi", definition: "The central energy channel that runs along the spine." },
    { term: "Svadhisthana Chakra", definition: "The sacral chakra, associated with creativity and emotion." },
    { term: "Svadhyaya", definition: "Self-study, one of the Niyamas." },
    { term: "Tadasana", definition: "Mountain Pose, the foundation for all standing poses." },
    { term: "Tantra", definition: "A spiritual tradition focused on using the body and its energies to achieve enlightenment." },
    { term: "Tapas", definition: "Self-discipline or austerity, one of the Niyamas." },
    { term: "Trikonasana", definition: "Triangle Pose." },
    { term: "Uddiyana Bandha", definition: "The upward abdominal lock." },
    { term: "Ujjayi", definition: "Victorious breath, a pranayama technique that creates a soft sound in the back of the throat." },
    { term: "Upanishads", definition: "Ancient Sanskrit texts of spiritual teaching and ideas of Hinduism." },
    { term: "Upavistha", definition: "Seated." },
    { term: "Utkata", definition: "Fierce or powerful. Used in Utkatasana (Chair Pose)." },
    { term: "Uttana", definition: "Intense stretch." },
    { term: "Vairagya", definition: "Detachment or renunciation." },
    { term: "Vata", definition: "One of the three doshas in Ayurveda, associated with air and ether elements." },
    { term: "Vedas", definition: "The most ancient Hindu scriptures, containing hymns, philosophy, and guidance on ritual." },
    { term: "Viparita", definition: "Inverted." },
    { term: "Virabhadrasana", definition: "Warrior Pose." },
    { term: "Vishuddha Chakra", definition: "The throat chakra, associated with communication and self-expression." },
    { term: "Yamas", definition: "The five ethical principles or moral restraints in yoga." },
    { term: "Yantra", definition: "A mystical diagram used in meditation to focus the mind." },
    { term: "Yoga Nidra", definition: "Yogic sleep; a state of conscious deep sleep for profound relaxation and healing." },
    { term: "Yogi/Yogini", definition: "A male/female practitioner of yoga." },
    { term: "Yuga", definition: "An era or epoch within a four-age cycle in Hindu cosmology." }
];

export default function GlossaryPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-glossary');
  return (
    <div>
      <section className="relative h-64 sm:h-96 flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight">
            Glossary & Sanskrit Guide
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            A guide to Sanskrit terms and pose names.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Understand key pose names, pronunciation, and common terminology used in yoga.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {terms.sort((a, b) => a.term.localeCompare(b.term)).map((item, index) => (
            <Card key={index}>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{item.term}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{item.definition}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
