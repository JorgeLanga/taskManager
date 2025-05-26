import { Header } from "../components/header";
import { Footer } from "../components/footer";
import {  TrashIcon, CheckIcon, PlusSquareIcon,  RadioButtonIcon } from "@phosphor-icons/react";
import type { taskProps } from "../types/users";
import { useEffect, useState } from "react";

export const Home = () => {
  const [task, setTasks] = useState<taskProps[]>([]);
  const [title, setTitle] = useState("");

  let novaLista: taskProps[];
/*
  useEffect(() => {
    getTasks();
  }, []);

  function getTasks() {
    setTasks(taskUsers);
  }*/

  function deleteTask(value: number) {
    novaLista = task.filter((tarefa) => tarefa.id !== value);
    setTasks(novaLista);
   
  }

  function addTask() {
    const novaTask = {
      id: task.length,
      description: title,
      dateTask: new Date().toLocaleString(),
      checked: false,
    };
    setTasks([...task, novaTask]);
  }

  function addCheck(value:number){
   const novaLista=task.filter((tarefa)=>tarefa.id===value? tarefa.checked=!tarefa.checked:tarefa.checked )
   setTasks(novaLista)

  }

 
  return (
    <div>
      <Header />

      <div>
        <main className="p-6 bg-gray-950 min-h-screen text-white py-20">
          <div className="flex justify-center items-center gap-8 ">
            <input
              type="text"
              placeholder="Registe a sua tarefa aqui"
              className="text-white bg-white/40 py-3 px-6 rounded-2xl w-2xl"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <button
              className="bg-white text-gray-900 px-3 py-1 rounded hover:bg-gray-200"
              onClick={addTask}
            >
              <span><PlusSquareIcon size={32} /></span>
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-4 my-4">Minhas Tarefas</h2>

          {task.map((item) => (
            <div className="space-y-4 my-2">
              <div className="flex justify-between items-center bg-gray-800 rounded-xl p-4 shadow">
                <div>
                  <h3 className="text-lg font-semibold">
                    <span>{item.id + 1}. </span>
                    {item.description}
                  </h3>
                  <p className="text-sm text-gray-400">{item.dateTask}</p>
                </div>
                <div className="flex gap-2">

                  <button onClick={()=>addCheck(item.id)} >
                 {item.checked?  <CheckIcon size={32} className="text-white"/>:  <RadioButtonIcon size={32} /> }
                  </button>

                  <button
                    onClick={() => deleteTask(item.id)}
                    value={item.id}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    <TrashIcon size={32} />
                  
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
};
