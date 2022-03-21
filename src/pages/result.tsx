import {NextPage} from 'next';
import {useSelector} from 'react-redux';
import {ClimbingBoxLoader} from 'react-spinners';


const Result: NextPage = () => {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const {emailAddress, userName, personalityTypes} = useSelector((state) => state);

  const checkChoicesSum = () => {
    const sum = personalityTypes.E + personalityTypes.I + personalityTypes.In + personalityTypes.S + personalityTypes.F + personalityTypes.D + personalityTypes.B + personalityTypes.W;
    return sum === 40;
  };

  if (checkChoicesSum())
    return (
      <div className="flex flex-col justify-center items-start my-20 mx-20 p-7 shadow-2xl rounded-3xl">
        <p className="2xl:text-3xl xl:text-2xl sm:text-lg font-bold">{userName}, deine Persönlichkeit hat die folgenden Attribute: </p>

        <div className="p-10 2xl:text-2xl sm:text-lg bg-gradient-to-r bg-gray-200 shadow-md rounded-full m-8">
          {personalityTypes.E > personalityTypes.I? <p> Extraversion </p> :<p> Introversion </p> }
        </div>

        <div className="p-10 2xl:text-2xl sm:text-lg bg-gradient-to-r bg-gray-200 shadow-md rounded-full m-8">
          {personalityTypes.S > personalityTypes.In? <p> Sinnliche Wahrnehmung </p> :<p> Intuitive Wahrnehmung </p> }
        </div>

        <div className="p-10 2xl:text-2xl sm:text-lg bg-gradient-to-r bg-gray-200 shadow-md rounded-full m-8">
          {personalityTypes.F > personalityTypes.D? <p> FühlEntscheidung </p> :<p> DenkEntscheidung </p> }
        </div>

        <div className="p-10 2xl:text-2xl sm:text-lg bg-gradient-to-r bg-gray-200 shadow-md rounded-full m-8">
          {personalityTypes.B > personalityTypes.W? <p> Beurteilende Einstellung </p> :<p> Wahrnehmende Einstellung </p> }
        </div>
        
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center my-20 mx-20 p-20 shadow-2xl rounded-3xl">
      <ClimbingBoxLoader size={30} color="gray"/>
      <text className="p-20 text-gray-500 font-bold"> Loading ... </text>
    </div>
  );
};

export default Result;
