import React, { useContext, useEffect, useRef, useState } from 'react'
import { LogStateContext } from '../../Providers/LogState'
import axios from 'axios'
import Card from '../../components/Card/Card'

const Home = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const observer = useRef()
    
    
    const fetchData = async (page) =>{
        setLoading(true)
        try{
            axios.get(`https://gutendex.com/books/?page=${page}`)
                .then((response)=>{
                    setData((prevData)=>
                        [...prevData, ...response.data.results]
                    )
                    
                    setHasMore(response.data.results.length>0)
                })
            
            
            
        }catch(error){
            console.log(error);
            
        }finally{
            setLoading(false)
        }
        
   } 
        useEffect(()=>{
            fetchData(page)
        }, [page])

        const lastItemRef = (node) =>{
            if(loading) return;

            if(observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries)=>{
                if(entries[0].isIntersecting && hasMore){
                    setPage((prevPage)=>{
                        return prevPage +1
                    })
                }
            })

            if(node) observer.current.observe(node)

        }

        
    const user = JSON.parse(localStorage.getItem('user'))
    const {isAuth, login, logout} = useContext(LogStateContext)
    let headerPhrase = null
    if (!isAuth){
        headerPhrase = <h1>Наша коллекция книг очень большая. Присоединяйся к нам!</h1>
    }else{
        headerPhrase = (user && isAuth)&& <h1>{user.name}, Привет!</h1>
    }

    const booksArr = data && data.map((item, index)=>{
            
        return (
            <Card 
                scrollRefferal = {index === data.length - 1 ? lastItemRef : null}
                bookName = {item.title}
                bookAuthor = {item.authors[0]?.name? item.authors[0].name:item.authors[0]='unknown author'}
                />
        )
    })


  return (
    <div>
        {headerPhrase}
        {booksArr}
    </div>
  )
}

export default Home