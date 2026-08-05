import { Trophy, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface Activity {
  id: string;
  organization: string;
  role: string;
  duration: string;
  points: string[];
}

export default function Extracurricular() {
  const activities: Activity[] = [
    {
      id: 'hockey',
      organization: 'University of Colombo Hockey Team',
      role: 'Active Player',
      duration: '2023 – Present',
      points: [
        'Active player representing the university in 3+ inter-university tournaments, competing against 10+ universities',
        'Achievements: Merit Award (2024), Colour Award (2025), SLUG 2025 Champions, Mora 9’s Champions, Pera 6’s Runner-up, Vice Chancellor Trophy 2025 Champions',
      ],
    },
    {
      id: 'rotaract',
      organization: 'Rotaract Club of UCSC',
      role: 'Editor, Executive Committee',
      duration: '2023 – Present',
      points: [
        'Editor, Executive Committee (2025–Present): Led an editorial team of 3 members, producing 10+ publications and managing social media content reaching 500+ club members monthly',
        'Member, Public Relations Avenue (2024–2025): Orchestrated 5+ community outreach events, increasing club visibility by 40% through strategic communications',
        'Member, Club Service Avenue (2023–2024): Participated in 8+ service projects benefiting 200+ community members',
      ],
    },
  ];

  return (
    <section id="extracurricular" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Extracurricular Activities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leadership, teamwork, and community engagement beyond the classroom.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center space-x-3">
                  <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {activity.organization}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      {activity.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  <Calendar className="h-4 w-4" />
                  <span>{activity.duration}</span>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {activity.points.map((point, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
