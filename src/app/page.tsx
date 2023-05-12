
'use client';
import AddTask from './components/AddTask';
import  {useRouter} from 'next/navigation'
export default function Home() {
  const router = useRouter();
  return (
    <>
     <main className='max-w-4xl mx-auto bg-red-400 mt-4'>
      <div className='text-center my-5 flex flex-col grap-4'>
        <h1 className='text-2xl font-bold'>TodoList App</h1>
        <AddTask></AddTask>
      </div>
     </main>
    </>
  )
}
