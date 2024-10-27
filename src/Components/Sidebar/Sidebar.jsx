

// eslint-disable-next-line react/prop-types
const Sidebar = ({ recipeQueue, handleRemove, preparedRecipe }) => {
    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-200">

            <div className="overflow-x-auto">

                
                <h2 className="text-center text-xl text-gray-800 border-b-2 mx-auto font-bold pb-2">Want to Cook: {recipeQueue.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time/minute.</th>
                            <th>Celories</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        // eslint-disable-next-line react/prop-types
                        recipeQueue.map((recipe, index) =>
                            <tr className="hover" key={index}>
                                <th>{index + 1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time} </td>
                                <td>{recipe.calories}</td>


                                <td>
                                <button onClick={()=>handleRemove(recipe.recipe_id)} className="btn bg-[#0be58a] text-gray-800 rounded-xl">Preparing</button>
                                </td>
                            </tr>)
                    }
                    <tbody>


                    </tbody>
                </table>

            </div>

            <div className="overflow-x-auto mt-10">

                <h2 className="text-center text-xl text-gray-800 border-b-2 mx-auto font-bold pb-2">Currently Cooking: {preparedRecipe.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time/minute.</th>
                            <th>Celories</th>

                        </tr>
                    </thead>

                    {
                        preparedRecipe.map((recipe, index) =>
                            <tr className="hover" key={index}>
                                <th>{index + 1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time} </td>
                                <td>{recipe.calories}</td>
                            </tr>)

                           
                    }
                </table>

            </div>
        </div>
    );
};

export default Sidebar;
