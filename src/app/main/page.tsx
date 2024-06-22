"use client";
import { observer } from "mobx-react";
import {useState, useEffect} from "react";
import MainFooter from "@/components/footer/MainFooter";
import fetchAll from "@/logic/ciient/fetch";
import Image from "next/image";

interface Note {
    content: string;
    dir: string;
    filename: string;
    youtubeUrl: string;
}

interface MemoryDTO{
    id: string,
    filename: string,
    path: string,
    name: string,
    content: string,
    youtubeUrl: string,
}

const MainPage = observer(() => {
    const [showNotepad, setShowNotepad] = useState<number | null>(null);
    const [memoryData, setMemory] = useState<MemoryDTO[]>([])
    const [notes, setNotes] = useState<Note[]>([]);
    const [positions, setPositions] = useState<{ top: string; left: string }[]>([]);
    const [sizes, setSizes] = useState<string[]>([])

    const generateTwoDigitNumber = (): number => {
        return Math.floor(Math.random() * 90) + 10;
    }

    const generateSizeNumber = (): number => {
        return Math.floor(Math.random() * 101) + 100;
    }

    const handleClick = (index: number) => {
        setShowNotepad(index);
    };

    const handleSave = () => {
        setShowNotepad(null);
        console.log(notes);
    };

    const handleBack = () => {
        setShowNotepad(null);
    };

    const getYouTubeEmbedUrl = (url: string) => {
        const match = url.match(
            /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
        );
        return match ? `https://www.youtube.com/embed/${match[1]}` : "";
    };


    useEffect(() => {
        const moveCircle = () => {
            setPositions(positions.map(() => {
                const x = Math.random() * (window.innerWidth - 200);
                const y = Math.random() * (window.innerHeight - 200);
                return { top: `${y}px`, left: `${x}px` };
            }));
        };

        const intervalId = setInterval(moveCircle, 3000); // Move every 3 seconds
        return () => clearInterval(intervalId);
    }, [positions]);

    useEffect(() => {
        fetchAll().then((res) => {
            const memories = res.data.data as MemoryDTO[]
            const notes: Note[] = []
            setMemory(memories)

            memories.map((value) => {
                notes.push({youtubeUrl: value.youtubeUrl, dir: value.path, content: value.content, filename: value.filename})
            })

            setNotes(notes)
        });
    }, []);

    useEffect(() => {
        if(memoryData.length > 0){
            const arr: {left: string, top: string}[] = []
            const sizeArr: string[] = []
            memoryData.forEach((val, idx) =>{
                console.log(`${idx}: `+val)
                const left = String(generateTwoDigitNumber()) +"%";
                const top = String(generateTwoDigitNumber()) + "%";
                const size = String(generateSizeNumber()) + "px";
                arr.push({left, top})
                sizeArr.push(size)
            })

            setPositions(arr)
            setSizes(sizeArr)
        }
    }, [memoryData]);

    return (
        <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: 'url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D)', // Background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100vw',
            boxSizing: 'border-box',
            overflow: 'hidden',
            padding: '20px',
        }}>
            {positions.map((position, index) => (
                showNotepad === null && (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        style={{
                            position: 'absolute',
                            top: position.top,
                            left: position.left,
                            transition: 'top 3s ease-in-out, left 3s ease-in-out',
                            width: sizes[index],
                            height: sizes[index],
                            borderRadius: "50%",
                            background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.7), rgba(173, 216, 230, 0.3))",
                            boxShadow: "0 0 20px rgba(173, 216, 230, 0.5)",
                            border: "0.5px solid rgba(255, 255, 255, 0.8)",
                            backdropFilter: "blur(6px)",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 10,
                        }}
                    />
                )
            ))}
            {showNotepad !== null && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "20px",
                        borderRadius: "15px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        backgroundColor:"rgba(249, 249, 249, 0.7)",
                        width: "400px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        zIndex: 20,
                    }}
                >
                    <Image src={'/assets/image/' + notes[showNotepad].filename} alt={'image'} width={150} height={150}/>
                    <p
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "20px",
                            border: "1px solid #ddd",
                            fontSize: "14px",
                            resize: "none",
                        }}
                    >
                        {notes[showNotepad].content}
                    </p>
                    <input
                        type="text"
                        hidden={true}
                        placeholder="Enter YouTube URL"
                        value={notes[showNotepad].youtubeUrl}
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "20px",
                            border: "1px solid #ddd",
                            fontSize: "13px",
                            marginBottom: "10px",
                        }}
                    />
                    {notes[showNotepad].youtubeUrl && (
                        <iframe
                            width="100%"
                            height="315"
                            src={getYouTubeEmbedUrl(notes[showNotepad].youtubeUrl)}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ marginBottom: "10px" }}
                        ></iframe>
                    )}
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px'}}>
                        <button
                            onClick={handleSave}
                            style={{
                                padding: "10px 20px",
                                borderRadius: "20px",
                                backgroundColor: "#ADD8E6",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                                marginRight: "10px",
                            }}
                        >
                            Save Your Memory
                        </button>
                        <button
                            onClick={handleBack}
                            style={{
                                padding: "10px 20px",
                                borderRadius: "20px",
                                backgroundColor: "#FF6F61",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "14px",
                            }}
                        >
                            Back
                        </button>
                    </div>
                </div>
            )}
            <MainFooter/>
        </div>
    );
});

export default MainPage;
