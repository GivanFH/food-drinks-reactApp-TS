import { useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"

export default function Header() {


    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])

    return (
        <header className= { isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'} >
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logotipo" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink
                            to={'/'}
                            className={({ isActive }) =>
                                isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"
                            }
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to={'/favoritos'}
                            className={({ isActive }) =>
                                isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"
                            }
                        >
                            Favoritos
                        </NavLink>
                    </nav>
                </div>

                {isHome && (
                    <form
                        className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg"
                    >
                        <div className="space-y-4">
                            <label
                                className="block text-white uppercase font-extrabold text-lg"
                                htmlFor="ingredient"
                            >
                                Nombre o Ingredientes
                            </label>
                            <input
                                id="ingredient"
                                type="text"
                                name="ingredient"
                                className="p-3 w-full rounded-lg focus:outline-none"
                                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila..."
                            />
                        </div>
                        <div className="space-y-4">
                            <label
                                className="block text-white uppercase font-extrabold text-lg"
                                htmlFor="category"
                            >
                                Categoria
                            </label>
                            <select
                                name="category"
                                id="category"
                                className="p-3 w-full rounded-lg focus:outline-none"
                            >
                                <option value=""> -- Seleccione --</option>
                            </select>
                        </div>
                        <input type="submit"
                            value='buscar recetas'
                            className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase mt-4"
                        />
                    </form>
                )}
            </div>
        </header>
    )
}
