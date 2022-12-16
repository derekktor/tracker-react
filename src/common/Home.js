import Tasks from "../components/Tasks";

const parseTime = (obj) => {
    let day = "";

    switch (obj.date.day) {
        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tue";
            break;
        case 3:
            day = "Wed";
            break;
        case 4:
            day = "Thu";
            break;
        case 5:
            day = "Fri";
            break;
        case 6:
            day = "Sat";
            break;
        case 7:
            day = "Sun";
            break;
        default:
            alert("Invalid day entered in time object");
            break;
    }

    const date = obj.date.year + "/" + obj.date.month + "/" + obj.date.day;
    const time = obj.time.hour + ":" + obj.time.minute;

    return `${day} ${date} ${time}`;
};

const Home = ({ time, tasks }) => {

    return (
        <div>
            <h1>Home</h1>
            <p>{parseTime(time)}</p>
            <Tasks tasks={tasks} />
        </div>
    );
};

export default Home;
