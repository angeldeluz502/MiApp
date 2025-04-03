import React, { useState } from 'react';
import ExerciseCard from './components/ExerciseCard';
import ExerciseHeader from './components/ExerciseHeader';
import ExerciseTimer from './components/ExerciseTimer';
import ExerciseInstructions from './components/ExerciseInstructions';

const App = () => {
  const [currentView, setCurrentView] = useState('menu');
  const [currentExercise, setCurrentExercise] = useState(null);

  const exercises = [
    {
      id: 1,
      title: 'Respiración 4-7-8',
      description: 'Técnica para calmar la mente rápidamente',
      duration: 5,
      icon: 'breathing',
      steps: [
        'Siéntate con la espalda recta en un lugar cómodo',
        'Coloca la punta de la lengua detrás de los dientes frontales superiores',
        'Exhala completamente por la boca',
        'Inhala silenciosamente por la nariz contando hasta 4',
        'Aguanta la respiración contando hasta 7',
        'Exhala completamente por la boca contando hasta 8',
        'Repite este ciclo 4 veces'
      ]
    },
    {
      id: 2,
      title: 'Relajación Muscular',
      description: 'Libera tensión corporal progresivamente',
      duration: 10,
      icon: 'muscle',
      steps: [
        'Siéntate o acuéstate en posición cómoda',
        'Comienza por los pies, tensa los músculos por 5 segundos',
        'Libera la tensión y nota la diferencia por 30 segundos',
        'Sube gradualmente por cada grupo muscular',
        'Tensa y relaja pantorrillas, muslos, glúteos',
        'Continúa con abdomen, pecho, brazos y manos',
        'Finaliza con cuello, mandíbula y rostro'
      ]
    },
    {
      id: 3,
      title: 'Visualización Guiada',
      description: 'Crea un espacio mental de tranquilidad',
      duration: 8,
      icon: 'visualization',
      steps: [
        'Cierra los ojos y respira profundamente',
        'Imagina un lugar que te transmita paz y seguridad',
        'Visualiza los detalles: colores, sonidos, aromas',
        'Explora este lugar con todos tus sentidos',
        'Permanece en este espacio el tiempo que necesites',
        'Cuando estés listo, abre los ojos lentamente',
        'Lleva contigo esta sensación de calma'
      ]
    },
    {
      id: 4,
      title: 'Meditación Mindfulness',
      description: 'Enfoca tu atención en el momento presente',
      duration: 10,
      icon: 'meditation',
      steps: [
        'Adopta una postura cómoda pero alerta',
        'Enfócate en tu respiración natural',
        'Cuando tu mente divague, regresa suavemente al presente',
        'Observa tus pensamientos sin juzgarlos',
        'Expande tu conciencia a los sonidos alrededor',
        'Nota las sensaciones en tu cuerpo',
        'Finaliza llevando esta atención a tu día'
      ]
    },
    {
      id: 5,
      title: 'Diario de Gratitud',
      description: 'Cultiva una mentalidad positiva',
      duration: 5,
      icon: 'gratitude',
      steps: [
        'Toma un cuaderno y escribe la fecha',
        'Lista 3 cosas por las que estés agradecido hoy',
        'Describe por qué valoras cada una',
        'Reflexiona sobre cómo te hacen sentir',
        'Puedes incluir personas, experiencias o cosas simples',
        'Intenta encontrar nuevos aspectos cada día',
        'Termina con una intención positiva para tu día'
      ]
    }
  ];

  const selectExercise = (exercise) => {
    setCurrentExercise(exercise);
    setCurrentView('exercise');
  };

  const completeExercise = () => {
    setCurrentView('completed');
  };

  const backToMenu = () => {
    setCurrentView('menu');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'menu' && (
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">MindMaster</h1>
            <p className="text-gray-600">5 técnicas científicas para reducir la ansiedad</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {exercises.map(exercise => (
              <ExerciseCard
                key={exercise.id}
                title={exercise.title}
                description={exercise.description}
                duration={exercise.duration}
                icon={exercise.icon}
                onSelect={() => selectExercise(exercise)}
              />
            ))}
          </div>
        </div>
      )}

      {currentView === 'exercise' && currentExercise && (
        <div>
          <ExerciseHeader
            title={currentExercise.title}
            description={currentExercise.description}
            onBack={backToMenu}
          />

          <div className="container mx-auto px-4 py-8 max-w-2xl">
            <ExerciseTimer
              duration={currentExercise.duration}
              onComplete={completeExercise}
            />

            <ExerciseInstructions steps={currentExercise.steps} />
          </div>
        </div>
      )}

      {currentView === 'completed' && currentExercise && (
        <div className="container mx-auto px-4 py-20 max-w-md">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Ejercicio completado!</h2>
            <p className="text-gray-600 mb-6">Has terminado "{currentExercise.title}". ¿Cómo te sientes?</p>
            <button
              onClick={backToMenu}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Volver al menú
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

// DONE