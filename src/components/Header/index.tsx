import { CircleUser } from "lucide-react"

export default function Header() {
  return (
    <div className="w-full h-25 bg-black flex items-center justify-between text-white font-bold text-center">
      <div>
        <ul className="flex flex-row">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </div>
      <div className="text-4xl ">
        <h1>Centro de Soluções Conectadas</h1>
        <h1>CSC</h1>
      </div>
      <div>
        <CircleUser /> 
      </div>
    </div>
  );
}
