import { useState, useEffect } from 'react'
import TicTacToe from './TicTacToe'
import './PhoneMockup.css'

const PhoneMockup = () => {
    const [gameOpen, setGameOpen] = useState(false)
    const [currentTime, setCurrentTime] = useState('')

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const hours = now.getHours()
            const minutes = now.getMinutes().toString().padStart(2, '0')
            const displayHours = hours % 12 || 12
            setCurrentTime(`${displayHours}:${minutes}`)
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="phone-wrapper">
            <div className="phone-mockup">
                {/* Phone Frame */}
                <div className="phone-frame">
                    {/* Notch/Camera */}
                    <div className="phone-notch">
                        <div className="notch-camera"></div>
                    </div>

                    {/* Status Bar */}
                    <div className="phone-statusbar">
                        <span className="status-time">{currentTime}</span>
                        <div className="status-icons">
                            <span className="material-icons status-icon">signal_cellular_alt</span>
                            <span className="material-icons status-icon">wifi</span>
                            <span className="material-icons status-icon">battery_full</span>
                        </div>
                    </div>

                    {/* Screen Content */}
                    <div className="phone-screen">
                        {gameOpen ? (
                            /* Tic Tac Toe Game View */
                            <div className="phone-game-view">
                                <button className="back-btn" onClick={() => setGameOpen(false)}>
                                    <span className="material-icons">arrow_back</span> Back
                                </button>
                                <TicTacToe />
                            </div>
                        ) : (
                            /* Home Screen with App Grid */
                            <div className="phone-home">
                                <div className="app-grid">
                                    {/* Row 1 */}
                                    <div className="app-slot">
                                        <div className="app-icon-box gradient-blue">
                                            <span className="material-icons">photo_library</span>
                                        </div>
                                        <span className="app-label">Photos</span>
                                    </div>
                                    <div className="app-slot">
                                        <div className="app-icon-box gradient-green">
                                            <span className="material-icons">music_note</span>
                                        </div>
                                        <span className="app-label">Music</span>
                                    </div>
                                    <div className="app-slot">
                                        <div className="app-icon-box gradient-orange">
                                            <span className="material-icons">note</span>
                                        </div>
                                        <span className="app-label">Notes</span>
                                    </div>
                                    <div className="app-slot">
                                        <div className="app-icon-box gradient-purple">
                                            <span className="material-icons">mail</span>
                                        </div>
                                        <span className="app-label">Mail</span>
                                    </div>

                                    {/* Row 2 */}
                                    <button className="app-slot" onClick={() => setGameOpen(true)}>
                                        <div className="app-icon-box gradient-cyan game-icon">
                                            <span className="material-icons">sports_esports</span>
                                        </div>
                                        <span className="app-label">Play</span>
                                    </button>
                                    <div className="app-slot">
                                        <div className="app-icon-box gradient-red">
                                            <span className="material-icons">access_time</span>
                                        </div>
                                        <span className="app-label">Clock</span>
                                    </div>
                                    <div className="app-slot">
                                        <div className="app-icon-box gradient-teal">
                                            <span className="material-icons">folder</span>
                                        </div>
                                        <span className="app-label">Files</span>
                                    </div>
                                    <div className="app-slot">
                                        <div className="app-icon-box gradient-pink">
                                            <span className="material-icons">settings</span>
                                        </div>
                                        <span className="app-label">Settings</span>
                                    </div>
                                </div>
                                <p className="tap-hint">Tap Play to try the game</p>
                            </div>
                        )}
                    </div>

                    {/* Home Indicator */}
                    <div className="phone-home-indicator"></div>
                </div>
            </div>
        </div>
    )
}

export default PhoneMockup
