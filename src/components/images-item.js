import classes from './item.module.css';

export default function ImageItem(props) {
  const { image } = props;

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <img src={'/' + image} alt={image} />
        <div className={classes.overlay}>
          <div className={classes.text}>ART GALLERY</div>
        </div>
      </div>
    </div>
  );
}