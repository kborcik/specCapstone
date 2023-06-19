import React, {useState, useEffect, useMemo} from "react";
import "./Profile.css";
import { PieChart, Pie, Label, LabelList } from "recharts";
import axios from "axios"

const Profile = (props) => {
  const [surveys, setSurveys] = useState([])
  const [index, setindex] = useState(null)
  const [username, setUsername] = useState(null)


  useEffect(()=> {
    axios.get('http://localhost:4000/api/surveys')
    .then((res)=>{
      setSurveys(res.data)
      console.log(res.data);
    })
  }, [])

  let options = useMemo( () => {
    return surveys.map((s,i) => {
      return <option value={i}>{s?.name}</option>
    })
  },[surveys])
  let data = index && JSON.parse(surveys[+index]?.coreValues).map((v, i) => {
    return {
      name: v,
      personality: 1,
    };
  });
  console.log((surveys[+index]?.coreValues));

  let handleIndex = (e) => {
    setindex(e.target.value)
    setUsername(e.target.value)
  }
  

  return (
    <div className="piechart">
    <select onChange={handleIndex}>
      <option selected disabled>
        Select a User
      </option>
      {options}
    </select>
    <h2>{username}</h2>
      <PieChart width={700} height={700}>
        <Pie
          data={data}
          dataKey="personality"
          value="name"
          outerRadius={250}
          innerRadius={150}
          fill="#E29C8D"
        >
          <Label position="center" value="This User's Core Values" />
          <LabelList dataKey="name" />
        </Pie>
      </PieChart>
    </div>
  );
};

export default Profile;
