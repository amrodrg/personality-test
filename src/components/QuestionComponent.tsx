import React, {FC, useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {PersonalityActionCreators} from '../redux/index';

type Props = {
  question: string
  options: any
}

const QuestionComponent: FC<Props> = ({question, options}) => {

  const dispatch = useDispatch();
  const PersonalityAC = bindActionCreators(PersonalityActionCreators, dispatch);


  const [chosenAnswer, setChosenAnswer] = useLocalStorage(question, '');
  const [isChosen, setIsChosen] = useLocalStorage(`isChosen${question}`, false);

  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>, personalityValue: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setChosenAnswer(event.target.value);
    console.log(event.target.value);

    if (isChosen) {
      switch (personalityValue) {
      case 'E':
        PersonalityAC.increaseE();
        PersonalityAC.decreaseI();
        break;
      case 'I':
        PersonalityAC.increaseI();
        PersonalityAC.decreaseE();
        break;
      case 'In':
        PersonalityAC.increaseIn();
        PersonalityAC.decreaseS();
        break;
      case 'S':
        PersonalityAC.increaseS();
        PersonalityAC.decreaseIn();
        break;
      case 'F':
        PersonalityAC.increaseF();
        PersonalityAC.decreaseD();
        break;
      case 'D':
        PersonalityAC.increaseD();
        PersonalityAC.decreaseF();
        break;
      case 'B':
        PersonalityAC.increaseB();
        PersonalityAC.decreaseW();
        break;
      case 'W':
        PersonalityAC.increaseW();
        PersonalityAC.decreaseB();
        break;
      default:
        return;
      }
    } else {
      setIsChosen(true);
      switch (personalityValue) {
      case 'E':
        return PersonalityAC.increaseE();
      case 'I':
        return PersonalityAC.increaseI();
      case 'In':
        return PersonalityAC.increaseIn();
      case 'S':
        return PersonalityAC.increaseS();
      case 'F':
        return PersonalityAC.increaseF();
      case 'D':
        return PersonalityAC.increaseD();
      case 'B':
        return PersonalityAC.increaseB();
      case 'W':
        return PersonalityAC.increaseW();
      default:
        return;
      }
    }

  };

  return (
    <div className="mt-6 mb-6 bg-gray-100 shadow-md p-7">
      <fieldset
        className="mt-6">

        <div>
          <legend className="text-base font-medium text-gray-900">{question}</legend>
        </div>
        <div className="mt-4 space-y-4">


          <div className="flex items-center">
            <input
              onChange={(event) => handleSelection(event, options.firstType)}
              checked={chosenAnswer === options.first}
              id={question}
              name={question}
              value={options.first}
              type="radio"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
              {options.first}
            </label>
          </div>


          <div className="flex items-center">
            <input
              onChange={(event) => handleSelection(event, options.secondType)}
              checked={chosenAnswer === options.second}
              required={true}
              id={question}
              name={question}
              value={options.second}
              type="radio"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
              {options.second}
            </label>
          </div>


        </div>

      </fieldset>
    </div>
  );
};

export default QuestionComponent;
