import React, { useState, useEffect } from 'react';
import useSearch from '../../hooks/useSearch';
import { debounce } from './debounce';
import Result from './Results';
import useGetConversations from '../../hooks/useGetConversations';
import useConversation from '../../zustand/useConversation';
import { IoSearch } from "react-icons/io5";
import toast from 'react-hot-toast';

const Search = () => {

  const [showResults, setShowResults] = useState(false)
	const [search, setSearch] = useState("");
  const [result, setResult] = useState([])
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
    (e)=>setSearch(e.target.value)
    console.log("search btn")
		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setResult([conversation]);
			setSearch("");
      setShowResults(true);
		} else {
      toast.error("No such user found!");
      setShowResults(false);
    }
	};

  const closePopup=()=>{
    setShowResults(false)

  }

  // useEffect(() => {
  //   if (searchTerm) {
  //     searchCall(searchTerm);
  //   }
  // }, [searchTerm]);

  return (
    <div className='flex flex-col items-center gap-2 relative'>
         <div className="flex items-center gap-2">
      <img src={"/logo.png"} className='h-14 w-12 object-cover' alt='logo' />
      <input
        type="text"
        onChange={handleSubmit}
        placeholder='Search'
        className='w-[300px] h-10 bg-lightGray p-2 text-sm outline-none '
      />
      <button 
        onClick={handleSubmit}
      className='bg-blue h-10 w-10 text-white rounded
       flex items-center justify-center text-xl'>
      <IoSearch /> 
      </button>
      
     </div>
     <div className="absolute top-12 left-12">
     {showResults && (
        <div className="absolute bg-white top-3 ">
          <Result closePopup={closePopup} results={result} />
        </div>
      )}
      </div>
    </div>
  );
};

export default Search;
