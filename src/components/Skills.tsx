import { Code, Server, PenTool as Tool, Database } from 'lucide-react';
import { 
  FaReact, FaNode, FaVuejs, FaHtml5, FaJs, 
  FaPython, FaDocker, FaGithub
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiExpress, 
  SiFastapi, SiGraphql, SiPostgresql, SiMongodb, 
  SiRedis, SiMysql, SiSupabase, SiFirebase, 
  SiGooglecloud, SiKubernetes, SiTerraform ,SiPhp,
  SiSpringboot
} from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: FaReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        // { name: 'Vue.js', icon: FaVuejs },
        { name: 'HTML5/CSS3', icon: FaHtml5 },
        { name: 'JavaScript ES6+', icon: FaJs },
        { name: 'PHP', icon: SiPhp }
      ]
    },
    {
      icon: Server,
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNode },
        // { name: 'Python/Django', icon: FaPython },
        { name: 'Express.js', icon: SiExpress },
        // { name: 'FastAPI', icon: SiFastapi },
        { name: 'RESTful APIs', icon: SiGraphql },
        // { name: 'GraphQL', icon: SiGraphql },
        { name: 'Spring Boot', icon: SiSpringboot }
      ]
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        // { name: 'Redis', icon: SiRedis },
        { name: 'MySQL', icon: SiMysql },
        // { name: 'Supabase', icon: SiSupabase },
        { name: 'Firebase', icon: SiFirebase }
      ]
    },
    {
      icon: Tool,
      title: 'Tools & DevOps',
      skills: [
        { name: 'AWS/GCP', icon: SiGooglecloud },
        // { name: 'Docker', icon: FaDocker },
        // { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Git/GitHub', icon: FaGithub },
        // { name: 'CI/CD', icon: SiTerraform },
        // { name: 'Terraform', icon: SiTerraform }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to build exceptional software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mb-6 mx-auto">
                  <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skillIndex}
                        className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg flex items-center shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        <SkillIcon className="h-5 w-5 mr-2 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}