import styles from './ingredient-image-gallery.module.css';
import {IIngredient} from "../../services/types/data";
import {FC} from "react";

interface  IIngredientGallery {
    ingredients: IIngredient[];
}
const IngredientImageGallery: FC<IIngredientGallery> = ({ ingredients }) => {
    return (
        <ul className={styles.ingredientImage__gallery}>
            {
                ingredients.map((item: IIngredient, index: number) =>
                  <li className={styles.ingredientImage__wrap} key={item._id}>
                      <img className={index === 5 ? styles.ingredientImage__blur : styles.ingredientImage} src={item.image} alt={item.name}/>
                      {index === 5 && ingredients.length > 5 &&
                          <p className={`${styles.ingredientImage__counter} text text_type_main-small`}>
                              +{ingredients.length - 5}
                          </p>
                      }
                  </li>
                ).slice(0,6)
            }
        </ul>
    );
}

export default IngredientImageGallery;
