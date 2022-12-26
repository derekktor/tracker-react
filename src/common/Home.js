import Tasks from "../components/Tasks";

const Home = ({ time, tasks }) => {

    return (
        <div>
            <h1>Home</h1>
            <p>{time}</p>
            <Tasks tasks={tasks} />
        </div>
    );
};

export default Home;
