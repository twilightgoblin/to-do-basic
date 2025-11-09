import React, { useState } from 'react'

const App = () => {
    const [tasks, setTasks] = useState([
    { id: String(Date.now()), title: "Example task" }
  ]);
  const [text, setText] = useState("");

  function handleAdd(e) {
  e.preventDefault(); // stop the browser from reloading the page on form submit
  const value = text.trim();
  if (!value) return; // simple validation: ignore empty/whitespace-only tasks

  // create a small unique id for demo purposes
  const id = String(Date.now()) + "-" + Math.floor(Math.random() * 1000);
  const newTask = { id, title: value };

  // use functional update to avoid stale state if multiple updates happen quickly
  setTasks((prev) => [newTask, ...prev]);

  // clear the input so the user sees the form reset immediately
  setText("");
}
function handleDelete(id) {
  setTasks(prev => prev.filter(t => t.id !== id));
}



  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-500 to-slate-900 text-slate-100'>
      <div className='w-full max-w-md bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6'>
      <h1 className='text-2xl font-semibold tracking-tight mb-4 text-center'>
To-Do App
      </h1>
      <div className='space-y-3'>
        <form className='flex gap-2'  onSubmit={handleAdd}>
          <input value={text}
             onChange={(e) => setText(e.target.value)}
          className='flex-1 rounded-xl bg-slate-900/40 slate border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
          placeholder='Add a new task'></input>
           <button
              type="submit"
              className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400 transition"
            >
              Add
            </button>
          </form>
          <ul className="divide-y divide-slate-700 mt-4">
  {tasks.map(t => (
    <li key={t.id} className="py-2 flex justify-between items-center">
      <span className="text-sm text-slate-200">{t.title}</span>
      <button
        onClick={() => handleDelete(t.id)}
        className="text-slate-400 hover:text-red-400 text-xs font-medium"
        aria-label={`Delete ${t.title}`}
      >
        Delete
      </button>
    </li>
  ))}
</ul>

        </div>

      </div>

      </div>
    
  )
}

export default App