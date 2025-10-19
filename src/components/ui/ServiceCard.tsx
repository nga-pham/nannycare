import { Card } from "react-bootstrap";
import { Check } from "lucide-react";

interface ServiceCardProps {
    icon: string | undefined;
  title: string;
  selected?: boolean;
  onClick?: () => void;
}

const ServiceCard = ({ icon, title, selected, onClick }: ServiceCardProps) => {
  return (
    <Card
          onClick={onClick}
      /*•	p - md - 4 applies larger padding at >= md(768px).*/
      className={`text-center position-relative cursor-pointer p-md-4 mb-5 ${
        selected ? "border-success border-3" : ""
      }`}
      style={{
        cursor: "pointer",
        transition: "all 0.3s",
        borderRadius: "1rem",
      }}
    >
      {selected && (
        <div
          className="position-absolute top-0 end-0 m-2 bg-success rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "24px", height: "24px" }}
        >
          <Check size={16} color="white" />
        </div>
      )}
      <Card.Body className="d-flex flex-column align-items-center gap-3 py-4">
        <Card.Img variant="top" src={icon} style={{ width: '50px', height: '50px' }} />
        <Card.Title className="mb-0 fs-5 fw-semibold">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
