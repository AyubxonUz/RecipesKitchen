import {useContext} from "react"
import {GlobalContext} from "../context/GlobalContext"
import {useCollection} from "../hooks/useCollection"
import RecipesList from "./RecipesList"

function Home() {
  const {user, dispatch} = useContext(GlobalContext)
  const {documents: recipes} = useCollection("recipes", ["uid", "==", user.uid])
  return (
    <div className="w-full h-full">
      {recipes ? (
        <RecipesList recipes={recipes} />
      ) : (
        <div className="flex justify-center h-full items-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  )
}

export default Home
