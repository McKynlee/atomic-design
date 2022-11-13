import { CostumeData } from "@mck-app/helpers/costumes";
import Image from 'next/future/image'

interface CostumeContentProps {
  section: CostumeData;
}

const CostumeContent: React.FC<CostumeContentProps> = (props) => {
  const {section} = props;

  return (
    <div key={section.name} className="costumeCard">
    <div>{section.name}</div>
    <div style={{marginTop: "0.5em", marginBottom: "0.5em"}}>
      <Image
        src={section.image}
        width={100}
        height={150}
        alt={section.name}
      />
    </div>
    <div>{section.count}</div>
  </div>
  )
}

export default CostumeContent;