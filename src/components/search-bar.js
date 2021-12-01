import React, { useState } from 'react';
import { getPersonages } from '../api';
import './search-bar.css';
import List from './list';

const SearchBar = () => {
  
  const [search, setSearch] = useState('');
  const [pers, setPers] = useState([]);
  const [select, setSelect] = useState(false);
  const [time, setTime] = useState(null);

  const onClear = () => {
    setSearch('');
    setSelect(false);
    setPers([]);
  }

  const getSearch = () => {
    clearTimeout(time);
    setSelect(false);
    setTime(setTimeout(() => {
        if (search) {
          getPersonages(search)
            .then((res) => {
              const { data } = res;
              setPers(data);
            });
        }
        else setPers([]);
      }
    , 400));
  }

  const onSelect = (event) => {
    const name = event.target.innerHTML;
    setSelect(true);
    setSearch(name);
    getPersonages(name)
      .then((res) => {
        const { data } = res;
        setPers(data);
    });
  }

  return (
    <div>
      <div>
        <input
          className="search"
          type="text"
          onChange={event => setSearch(event.target.value)}
          onKeyUp={getSearch}
          value={search}
        />
        {search &&
          <button className="clear" onClick={onClear}>X</button>
        }
      </div>
      {search && !select &&
        <ul className="drop-list">
          {pers?.results?.map( value => {
            return (
              <li key={value.name} onClick={event => onSelect(event)}>
                {value.name}
              </li>
            );
          })}
        </ul>
      }
      {select && pers.count === 1 &&
        <List info={pers.results[0]} />
      }
    </div>
  );
}

export default SearchBar;
