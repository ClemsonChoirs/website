import * as React from "react"
import { useState } from 'react'
import Footer from '../components/footer'
import Navbar from "../components/navbar"

import Div100vh from 'react-div-100vh'

import './stylesheets/staff.css'

import DrB from '../images/dr-b.jpg'
import odom from '../images/odom.jpg'
import doyel from '../images/doyel.jpg'
import ritter from '../images/ritter.jpg'
import conley from '../images/conley.jpg'
import grace from '../images/grace.jpg'

const Staff = () => {
    return (
        <Div100vh>

        <div class="navbar">
            <Navbar/>
        </div>
        <div className="staff-wrapper">
            <div className="staff-subwrapper">
            <div className="staff-header">
                <h1>{'Faculty & Staff'}</h1>
            </div>
                <div className="staff-container">
                    <div className="staff-left">
                        <StaffPanel
                            name="Dr. Anthony Bernarducci"
                            title="Director of Choral and Vocal Studies"
                            image={DrB}
                            body="Dr. Anthony Bernarducci is an
                            Associate Professor of Music and serves as the Director of Choral and Vocal Studies at Clemson University. Anthony conducts the Men’s Choir, Cantorei and Clemson University Singers as well as courses in music theory and composition. As an author, Anthony published articles on topics ranging from music education to performance practice. Most recently GIA Publications has released his book titled “Listening Awareness: Build Independent Creative Listeners In Choir”. Dr. Bernarducci is an active composer and has works published with GIA Publications, Hinshaw Music, and ECS Publishing Group. He has received commissions and performances from leading ensembles and organizations such as The Westminster Williamson Voices, The St. Olaf Choir, and The United States Soldiers Chorus. His compositions have been performed around the world by choral ensembles in Korea, Slovenia, Italy, and South Africa and on such notable stages as Carnegie Hall, Severance Hall, Mechanics Hall, and Heinz Hall.​He holds a PhD in music education from Florida State University, a Master of Music in conducting from the University of Arizona, and a Bachelor of music education from Westminster Choir College."

                        />
                        <StaffPanel
                            name="Dr. Lisa Sain Odom"
                            title="Professor of Voice and Musical Theatre"
                            image={odom}
                            body="Dr. Lisa Sain Odom is a professor of Music (Voice and Musical Theatre) in the Department of Performing Arts at Clemson and is an opera and musical theatre singer and actor. She holds a Doctor of Musical Arts (D.M.A.) degree in Vocal Performance from the University of South Carolina, as well as B.M. and M.M. degrees in Vocal Performance. As an opera and concert singer, Dr. Odom has appeared with various orchestras and opera companies throughout the US and Europe. Some of her roles include Papagena (Die Zauberflote), Isabelle/Madeline (The Face on the Barroom Floor), Musetta (La Boheme), Anne Page (The Merry Wives of Windsor), Monica (The Medium) and Miss Pinkerton (The Old Maid and the Thief). An accomplished concert soloist, some of Dr. Odom’s appearances include soprano soloist in Mozart’s Missa Brevis with the American Institute of Musical Studies in Graz, Austria; Ophelia in a concert version of Thomas’ Hamlet with the South Carolina Philharmonic; featured soloist in the New Year’s Eve Pops Concert with Foothills Philharmonic; featured soloist in an all-Gershwin concert with Fountain Inn Symphony Orchestra; and in the role of Anna in Kurt Weill’s Seven Deadly Sins with USC Symphony and Ballet. Dr. Odom enjoys performing new music and has premiered a variety of new works in concerts throughout South and North Carolina, including a set of gospel song arrangements by Dr. Jackie Griffin and several songs by Dr. Richard Williamson. Dr. Odom co-founded and performs with the soprano trio, “The Blonde, the Brunette and the Redhead,” currently singing opera, musical theater and jazz in concerts throughout the Southeast. Equally comfortable in the world of musical theater, Dr. Odom has performed a variety of musical theater roles including Julie Jordan (Carousel), the Baker’s Wife (Into the Woods), Chairy (Barnum!), Jeannie (Brigadoon) and Rose (The Secret Garden). She sang in the US premiere of British composer Ivor Novello's show The Dancing Years and also performed the role of K.D. McLady in the world premiere of DOGS: The Musical at the Piccolo Spoleto Festival. In addition to her stage work, Dr. Odom is a television and film actress and has appeared in a variety of independent films that have shown in festivals throughout the US and Europe, and she often appears as an actor or spokesperson in industrial films and commercials. Dr. Odom was a 2007 National Association of Teachers of Singing Intern and has worked with acclaimed teachers of both classical and contemporary vocal pedagogy such as Donald Simonson, Robert Edwin, Stephanie Samaras, and Jeannette LoVetri. Dr. Odom has served as musical director or vocal coach for a variety of musical theater productions including Rent; Guys and Dolls; She Loves Me; Bright Star; The Best Christmas Pageant Ever; Arsenic and Old Lace; and Barab’s children’s opera The Toy Shop (music and stage director). She has taught classes in vocal pedagogy, diction for singers, beginning vocal technique, music history, musical theatre history and opera scenes. In addition to her work at Clemson, she has served on the music faculties of North Greenville University and Western Carolina University."

                        />
                        
                        <StaffPanel
                            name="Grace Berardo"
                            title="Collaborative Pianist"
                            image={grace}
                            body="Grace Berardo is a collaborative pianist, vocal coach, and organist in the Greenville, SC area. She earned her B.M. in Music Business at Berry College and her Masters of Music in Collaborative Piano from the University of Tennessee, Knoxville. While at UTK she held an accompanying assistantship where some of her duties included coaching and accompanying VolOpera (the undergraduate opera scenes program) and the University of Tennessee Opera Theatre (UTOT). She also performed as a keyboardist for the University of Tennessee Symphony and Chamber Orchestras. Grace has frequently collaborated with collegiate and community musical theater productions, high school choirs, professional choirs, voice studios, and she has been a pianist for vocalists participating in both NATS and NATSAA competitions. She was recently engaged to perform a staged version of Franz Schubert’s “Winterreise” with Marble City Opera, and she has had multiple UTK performances featured on Knoxville’s local classical music station, 91.9 WUOT. In addition to performing, Grace also enjoys working in arts administration. With her friend and colleague Logan Campbell, she helped found Appalachia: A Southeastern Wind Symphony, a non-profit, intercollegiate wind orchestra. She now presently serves as the Director of Marketing for the Knoxville-based ensemble. More information can be found at https://appalachiasws.squarespace.com."
                        />
                    </div>
                    <div className="staff-right">
                        <StaffPanel
                            name="Dr. David Conley"
                            title={"Director of Tigeroar and TakeNote"}
                            image={conley}
                            body="Dr. David Conley is a Lecturer in Music, where he teaches music and directs two select ensembles which perform popular a cappella music: Tigeroar and TakeNote. He recently completed his doctoral studies, and also holds a Master’s degree from Erskine and a B.A. from Clemson. While a Clemson undergrad, Dr. Conley was student conductor and accompanist for the Clemson choral ensembles and has stayed involved since that time as an arranger and teacher. He helped emeritus faculty Dr. Dan Rash with the founding of Tigeroar and TakeNote in 1997. He worked mostly with the guys as their principal arranger, where his early credits included their signature song, “Tiger Rag”, and many others. He then kept arranging and team-teaching most of the choral ensembles with Dr. Rash over the years. In 2008, he became the choral director for Tigeroar and added the leadership of TakeNote in 2013. He teaches general music courses and leads seminars on arranging and theory for pop acapella ensembles.​Dr. Conley also holds an adjunct faculty position at Erskine College, where he formerly conducted the orchestra and taught courses in theory, conducting, arranging and composition. He currently teaches general music, church music and on the philosophy of creativity. He is active in the community as well, working as the music director and pianist for Young Memorial Presbyterian Church in Anderson. He is also the founder of Inklings Abroad, an international travel seminar with summer trips to England and Europe. Additionally, he is a freelance composer and arranger, with hundreds of songs produced for churches, school/college ensembles and community orchestras. On the performance side, he plays piano in the jazz/blues band, Sonic Bacon; and various folk instruments in the Celtic ensemble, Emerald Road. He lives in Clemson with his wife, Michelle, and their children, Wilson and Elyse. He enjoys music, reading, sport, travel and all things British!"
                        />
                        <StaffPanel
                            name="Jonathan Doyel"
                            title="Adjunct Professor of Voice"
                            image={doyel}
                            body="Jonathan Doyel, tenor, has been a performer and educator for two decades with a passion for helping musicians discover their true voices. As an adjunct professor, singer, entrepreneur, photographer, and writer, Jonathan has found the exploration and development of the creative mind an endless fascination. He has taught a number of successful voice students, including Laura Paruzinski, the winner of the 2016 NATS National Student Auditions Female Lower Collegiate Music Theater category. Jonathan has performed the tenor roles in Handel’s Messiah, Mendelssohn’s Elijah, and Haydn’s Creation; Basilio in Mozart’s Don Giovanni; Gastone in Verdi’s La Traviata; and several other operatic roles. He resides in Greenville, South Carolina with his three children."

                        />
                        <StaffPanel
                            name="Laura Ritter"
                            title="Conductor of CU Women's Choir"
                            image={ritter}
                            body="Professor Laura Ritter is Director of the Clemson Women’s Choir and also serves as Director of Choral Activities, Head of the Music and Theatre Department, and Assistant Dean of Humanities at Walters State Community College. In 2017, her students performed in the Carnegie Hall premiere of Dan Forrest’s Jubilate Deo and have also performed on several conventions of the American Choral Directors Association. Professor Ritter has served as musical director and accompanist for musical theatre productions including Les Miserables, Sunday in the Park with George, Legally Blonde, West Side Story, Anything Goes, and The Producers as well for master classes with Sutton Foster, Jason Danieley, and the late Marin Mazzie. She is founder and artistic director of the Lakeway Children’s Choir in her hometown of Morristown, TN. Professor Ritter earned the Bachelor of Music degree in Music Education from Furman University and the Master of Music in Choral Conducting from the University of Illinois. She has done further graduate work in Organ Performance at the University of Tennessee-Knoxville."

                        />
                    </div>
                </div>
                </div>
            
            <div className="staff-foot">
                <Footer/>
            </div>

        </div>
        </Div100vh>
    )
}

export default Staff

const StaffPanel = (props) => {
    const [expand, setExpand] = useState(false);

    const toggleExpand = () => {
        setExpand(!expand);
    }

    return (
        <div className="staff-panel">
            <h2>{props.name}</h2>
            <hr className="solid"></hr>
            <div className="panel-content">
                <h3 className="mobile-staff-title">{props.title}</h3>
                <img src={props.image} alt={"Image of " + props.name}/>
                <h3 className="web-staff-title">{props.title}</h3>
                {props.subtitle ? <h4>{props.subtitle}</h4> : ''}
                <p>
                    {expand ? props.body : props.body.slice(0, 220)}
                    <span role="button" tabIndex={0} onClick={toggleExpand} onKeyDown={toggleExpand}>
                        {expand ? " Read Less" : "...Read More"}
                    </span>
                </p>
            </div>
            
        </div>
    )
}