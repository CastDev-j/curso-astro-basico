import {useState} from 'preact/hooks';


export const Counter = () => {
  const [count, setCount] = useState(0);

return (
    <div class="mx-8 my-4 flex items-center justify-center gap-4">
        <p class="text-xl font-bold">Count: {count}</p>
        <button onClick={() => setCount(count - 1)} class="bg-gray-200 p-3 rounded-md text-lg font-bold text-gray-800 transition active:scale-105">Decrement</button>
        <button onClick={() => setCount(count + 1)} class="bg-gray-900 p-3 rounded-md text-lg font-bold text-gray-200 transition active:scale-105">Increment</button>
    </div>
);
};
 