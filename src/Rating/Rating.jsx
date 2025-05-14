import './Rating.css'
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import classNames from "classnames";


function Rating({ rating, maxRating, size }) {
    return (
        <div className='rating'>
            {
                new Array(maxRating).fill(0).map((_, index) => {
                    const isActive = rating >= index + 1;
                    return (
                        <Icon
                            key={index}
                            className={classNames("rating__start", {
                                "rating__start__active": isActive
                            })}
                            path={mdiStar}
                            size={size}
                        />
                    );
                })}{""}
        </div>
    )
}

export default Rating;