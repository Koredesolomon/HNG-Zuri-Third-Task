export default function ImageItem(props) {
    const { image } = props;
    return (
        <li>
            <img src={'/' + image} alt={image}/>
        </li>
    )
}