import {useState, useEffect} from 'react'

export function useFetch(url) {
  const [fetchData, setFetchData] = useState({
    loading: false,
    data: [],
    error: false
  });
  useEffect(() => {
    setFetchData({
      loading: true,
      data: [],
      error:false
    })
    fetch(url)
      .then(response => {
        if(response.ok){
          return response.json()
        } else {
          throw new Error()
        }
      })
      .then(dt => setFetchData({
        loading: false,
        data: dt,
        error: false
      }))
      .catch(err => setFetchData({
        loading: false,
        data: [],
        error: true
      }))
  }, [url]) 
  return [fetchData, setFetchData]
}

