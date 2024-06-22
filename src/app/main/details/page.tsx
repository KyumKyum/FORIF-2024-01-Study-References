"use client";
import { observer } from "mobx-react";
import { useState, useEffect } from "react";

interface Note {
    content: string;
    date: string;
}

const DetailPage = observer(() => {
    const [showNotepad, setShowNotepad] = useState<number | null>(null);
    const [notes, setNotes] = useState<Note[]>([
        { content: "", date: "" },
        { content: "", date: "" },
        { content: "", date: "" }
    ]);
    const [positions, setPositions] = useState<{ top: string; left: string }[]>([
        { top: '50%', left: '50%' },
        { top: '20%', left: '70%' },
        { top: '80%', left: '30%' },
    ]);
    const sizes = ["150px", "180px", "200px"];

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
    }, []);

    return (
        <div style={{ 
            position: 'relative',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginTop: '20px', 
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
                            border: "1px solid rgba(255, 255, 255, 0.8)",
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
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#f9f9f9",
                        width: "400px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        zIndex: 20,
                    }}
                >
                    <input
                        type="date"
                        value={notes[showNotepad].date}
                        onChange={(e) => {
                            const newNotes = [...notes];
                            newNotes[showNotepad] = {
                                ...newNotes[showNotepad],
                                date: e.target.value
                            };
                            setNotes(newNotes);
                        }}
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ddd",
                            fontSize: "14px",
                            marginBottom: "10px",
                        }}
                    />
                    <textarea
                        value={notes[showNotepad].content}
                        onChange={(e) => {
                            const newNotes = [...notes];
                            newNotes[showNotepad] = {
                                ...newNotes[showNotepad],
                                content: e.target.value
                            };
                            setNotes(newNotes);
                        }}
                        rows={10}
                        cols={30}
                        placeholder="Write your memory here..."
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ddd",
                            fontSize: "14px",
                            resize: "none",
                        }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px' }}>
                        <button
                            onClick={handleSave}
                            style={{
                                padding: "10px 20px",
                                borderRadius: "5px",
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
                                borderRadius: "5px",
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
        </div>
    );
});

export default DetailPage;
