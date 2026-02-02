interface CourseCardProps {
  title: string
  description: string
  level: string
}

export default function CourseCard({ title, description, level }: CourseCardProps) {
  const levelColors = {
    'Principiante': 'bg-green-100 text-green-800',
    'Intermedio': 'bg-yellow-100 text-yellow-800',
    'Avanzado': 'bg-red-100 text-red-800',
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 flex-1">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${levelColors[level as keyof typeof levelColors]}`}>
          {level}
        </span>
        <button className="text-funko font-semibold hover:underline">
          Ver Curso →
        </button>
      </div>
    </div>
  )
}
