import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

function EventDetail() {
  const router = useRouter();
  const { eventid } = router.query;
  const { title, description } = getEventById(eventid);
  return (
    <div>
      <h1>
        {title}
        <br />
        {description}
      </h1>
    </div>
  );
}

export default EventDetail;
