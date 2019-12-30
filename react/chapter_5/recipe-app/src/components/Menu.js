import Recipe from './Recipe'
import '../../stylesheets/Menu.css'

const Menu = ({ recipes }) =>
    <article>
        <header>
            <h1>Delicious Recipes</h1>
            <div className="recipes">
                {recipes.map((recipe, i) =>
                    <Recipe key={i} {...recipe} />
                )}
            </div>
        </header>
    </article>

export default Menu