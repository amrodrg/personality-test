import type { NextPage } from 'next';
import Questions from '../components/Questions';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NameActionCreators, EmailActionCreators} from  '../redux/index';
import React from 'react';
import {toast, ToastContainer} from 'react-toastify';
import Link from 'next/link';

const Home: NextPage = () => {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const {emailAddress, userName, personalityTypes} = useSelector((state) => state);

  const dispatch = useDispatch();
  const emailAddressAC = bindActionCreators(EmailActionCreators, dispatch);
  const userNameAC = bindActionCreators(NameActionCreators, dispatch);

  const handleEmailAddressInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    emailAddressAC.enterEmail(event.target.value);
  };

  const handleUserNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    userNameAC.enterName(event.target.value);
  };

  const checkChoicesSum = () => {
    const sum = personalityTypes.E + personalityTypes.I + personalityTypes.In + personalityTypes.S + personalityTypes.F + personalityTypes.D + personalityTypes.B + personalityTypes.W;
    return sum === 40;
  };

  console.log(checkChoicesSum());

  return (
    <div className="flex flex-col space-y-10 items-center py-2">
      <h1 className="text-3xl font-semibold">
        Persönlichkeitstest
      </h1>
      <form className="space-y-8 divide-y divide-gray-200 self-center w-1/2">

        <div className="space-y-8 divide-y divide-gray-200">


          <div className="flex-col space-y-10">
            <p className="mt-1 text-sm text-gray-500">
                Zu jeder Frage gibt es zwei Antwortmöglichkeiten. Entscheide Dich bitte möglichst spontan für eine der beiden Alternativen.
            </p>
            <p className="mt-1 text-sm text-gray-500">
                Wähle die Antwort, die Dir auf den ersten Blick am treffendsten erscheint und von welcher Du Dich stärker angesprochen fühlst.
                Beantworte diese Fragen bitte so, wie es für Dein Privatleben zutrifft.
            </p>
          </div>


          <div className="flex flex-col mt-6 pt-8 space-y-7">

            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover/>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Adresse
              </label>
              <div className="mt-1">
                <input
                  required={true}
                  onChange={handleEmailAddressInput}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                  Name
              </label>
              <div className="mt-1">
                <input
                  required={true}
                  onChange={handleUserNameInput}
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>



        <Questions/>



        <div className="pt-5">
          <div className="flex justify-end">
            {
              checkChoicesSum() && userName !='' && emailAddress != ''
                ?
                <button
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Link href="/result">
                    <a>Show Result</a>
                  </Link>
                </button>
                :
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Send
                </button>
            }

          </div>
        </div>


      </form>
    </div>
  );
};

export default Home;
