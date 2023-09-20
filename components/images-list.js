import ImageItem from "./images-item"
import { useAuth0 } from "@auth0/auth0-react";

export default function ImageList(props) {
    const { isAuthenticated } = useAuth0();
    const { image } = props;
    return (
        isAuthenticated && (
        <ul>
            {/* <div>
                
           </div> */}
            <div>
                {image.map((images) => (
                <ImageItem
                key={images.id} 
                id={images.id} 
                image={images.image}
                />
                ))}
            </div>
        </ul>
        )
    )
}