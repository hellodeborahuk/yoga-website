export default function Gallery() {
 
const myImages = [
  {
    index: 1,
    alt: "Easy Pose",
    image: "easy-pose-yoga-3.jpg",
  },
  {
    index: 2,
    alt: "Childs Pose",
    image: "restorative-yoga-childs-pose.jpg",
  },
  {
    index: 3,
    alt: "Squat",
    image: "yoga-squat.jpg",
  },
  {
    index: 4,
    alt: "Seated twist",
    image: "yoga-seated-twist-2.jpg",
  }
];

return (
<div className="gallery">
{myImages.map((item) => (
      <img src={`./images/gallery/${item.image}`} alt={item.alt} className="gallery-img" />
))}
</div>
)
}
