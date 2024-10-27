import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import OurRecipes from './Components/Our Recipes/OurRecipes'
import Recipes from './Components/Recipes/Recipes'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);

  const addRecipeToQueue = (recipe)=>{
    const isExist = recipeQueue.find(previousRecipe=>previousRecipe.recipe_id === recipe.recipe_id)

    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe])
    }
    else{
      alert('Recipe Already In The Queue.')
    }
    
  };


  const handleRemove = (id)=>{
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)

    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue)
    setPreparedRecipe([...preparedRecipe, deletedRecipe])
  }

  return (
    <>
      <div className='container mx-auto w-11/12'>
        <Header></Header>
        <Banner></Banner>
        <OurRecipes></OurRecipes>
      </div>


      <section className='container p-8 mx-auto flex flex-col md:flex-row gap-6'>
        {/* Recipe Card Section */}

        {/* Recipes */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>

        {/* Sidebar */}
        <Sidebar recipeQueue={recipeQueue} handleRemove={handleRemove} preparedRecipe={preparedRecipe}></Sidebar>

      </section>
    </>
  )
}

export default App
