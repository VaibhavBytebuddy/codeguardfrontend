import React, { useState, useRef, useEffect } from 'react';
import { Play, Save, FileText, Terminal, Settings, Moon, Sun } from 'lucide-react';

export default function CodeEditor() {
    const [code, setCode] = useState('// Welcome to Code Editor\nconsole.log("Hello World!");');
    const [language, setLanguage] = useState('javascript');
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [savedCodes, setSavedCodes] = useState([]);
    const [currentFileName, setCurrentFileName] = useState('untitled');
    const [theme, setTheme] = useState('dark');
    const textareaRef = useRef(null);

    const languages = [
        { id: 'javascript', name: 'JavaScript', extension: '.js' },
        { id: 'java', name: 'Java', extension: '.java' },
        { id: 'cpp', name: 'C++', extension: '.cpp' }
    ];

    const codeTemplates = {
        javascript: '// JavaScript Code\nconsole.log("Hello World!");',
        java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`,
        cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}`
    };

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        setCode(codeTemplates[newLanguage]);
        setOutput('');
    };

    const handleRunCode = async () => {
        setIsRunning(true);
        setOutput('Running...');

        try {
            // Simulate API call to backend
            const response = await fetch('http://localhost:8080/api/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    code: code,
                    language: language,
                    fileName: currentFileName
                })
            });

            const result = await response.json();

            if (response.ok) {
                setOutput(result.output || 'Program executed successfully!');
            } else {
                setOutput(`Error: ${result.error || 'Execution failed'}`);
            }
        } catch (error) {
            // Simulate output for demo purposes
            setTimeout(() => {
                if (language === 'javascript') {
                    try {
                        const logs = [];
                        const originalLog = console.log;
                        console.log = (...args) => logs.push(args.join(' '));
                        eval(code);
                        console.log = originalLog;
                        setOutput(logs.join('\n') || 'Program executed successfully!');
                    } catch (err) {
                        setOutput(`Error: ${err.message}`);
                    }
                } else {
                    setOutput(`Simulated output for ${language}:\nProgram executed successfully!\nNote: Connect to backend for actual execution.`);
                }
                setIsRunning(false);
            }, 1500);
            return;
        }

        setIsRunning(false);
    };

    const handleSaveCode = () => {
        const newSave = {
            id: Date.now(),
            fileName: currentFileName,
            language: language,
            code: code,
            timestamp: new Date().toLocaleString()
        };

        setSavedCodes(prev => [newSave, ...prev.slice(0, 9)]); // Keep last 10 saves
        setOutput(`Code saved as "${currentFileName}"`);
    };

    const loadSavedCode = (savedCode) => {
        setCode(savedCode.code);
        setLanguage(savedCode.language);
        setCurrentFileName(savedCode.fileName);
        setOutput(`Loaded "${savedCode.fileName}"`);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            const newCode = code.substring(0, start) + '    ' + code.substring(end);
            setCode(newCode);

            setTimeout(() => {
                if (textareaRef.current) {
                    textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
                }
            }, 0);
        }

        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            handleRunCode();
        }

        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            handleSaveCode();
        }
    };

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
            {/* Header */}
            <header className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-xl font-bold">Vaibhav's Code Editor</h1>
                        <div className="flex items-center space-x-2">
                            <FileText size={16} />
                            <input
                                type="text"
                                value={currentFileName}
                                onChange={(e) => setCurrentFileName(e.target.value)}
                                className={`px-2 py-1 text-sm rounded border ${
                                    theme === 'dark'
                                        ? 'bg-gray-700 border-gray-600 text-white'
                                        : 'bg-gray-100 border-gray-300 text-gray-900'
                                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                placeholder="filename"
                            />
                            <span className="text-sm text-gray-500">
                {languages.find(l => l.id === language)?.extension}
              </span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Language Selector */}
                        <select
                            value={language}
                            onChange={(e) => handleLanguageChange(e.target.value)}
                            className={`px-3 py-2 rounded border ${
                                theme === 'dark'
                                    ? 'bg-gray-700 border-gray-600 text-white'
                                    : 'bg-white border-gray-300 text-gray-900'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        >
                            {languages.map(lang => (
                                <option key={lang.id} value={lang.id}>{lang.name}</option>
                            ))}
                        </select>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className={`p-2 rounded ${
                                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                            } transition-colors`}
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Action Buttons */}
                        <button
                            onClick={handleSaveCode}
                            className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors"
                        >
                            <Save size={16} />
                            <span>Save</span>
                        </button>

                        <button
                            onClick={handleRunCode}
                            disabled={isRunning}
                            className={`flex items-center space-x-2 px-4 py-2 rounded transition-colors ${
                                isRunning
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700'
                            } text-white`}
                        >
                            <Play size={16} />
                            <span>{isRunning ? 'Running...' : 'Run'}</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex h-screen">
                {/* Sidebar */}
                <div className={`w-64 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'} border-r p-4`}>
                    <h3 className="font-semibold mb-4 flex items-center">
                        <FileText size={16} className="mr-2" />
                        Saved Files
                    </h3>

                    <div className="space-y-2 max-h-96 overflow-y-auto">
                        {savedCodes.length === 0 ? (
                            <p className="text-sm text-gray-500">No saved files</p>
                        ) : (
                            savedCodes.map(saved => (
                                <div
                                    key={saved.id}
                                    onClick={() => loadSavedCode(saved)}
                                    className={`p-3 rounded cursor-pointer transition-colors ${
                                        theme === 'dark'
                                            ? 'hover:bg-gray-700 bg-gray-750'
                                            : 'hover:bg-gray-200 bg-white'
                                    } border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'}`}
                                >
                                    <div className="font-medium text-sm">{saved.fileName}</div>
                                    <div className="text-xs text-gray-500">{saved.language}</div>
                                    <div className="text-xs text-gray-400">{saved.timestamp}</div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Keyboard Shortcuts */}
                    <div className="mt-8 text-xs text-gray-500">
                        <h4 className="font-medium mb-2">Shortcuts:</h4>
                        <div>Ctrl+Enter: Run</div>
                        <div>Ctrl+S: Save</div>
                        <div>Tab: Indent</div>
                    </div>
                </div>

                {/* Main Editor Area */}
                <div className="flex-1 flex flex-col">
                    {/* Code Editor */}
                    <div className="flex-1 p-4">
                        <div className={`h-full rounded-lg border ${
                            theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                        } overflow-hidden`}>
                            <div className={`${
                                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                            } px-4 py-2 border-b ${
                                theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                            } text-sm font-medium`}>
                                {languages.find(l => l.id === language)?.name} Editor
                            </div>

                            <textarea
                                ref={textareaRef}
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className={`w-full h-full p-4 font-mono text-sm resize-none focus:outline-none ${
                                    theme === 'dark'
                                        ? 'bg-gray-900 text-white'
                                        : 'bg-white text-gray-900'
                                }`}
                                placeholder="Write your code here..."
                                spellCheck={false}
                            />
                        </div>
                    </div>

                    {/* Output Panel */}
                    <div className={`h-64 border-t ${
                        theme === 'dark' ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-gray-50'
                    } p-4`}>
                        <div className="flex items-center mb-2">
                            <Terminal size={16} className="mr-2" />
                            <h3 className="font-semibold">Output</h3>
                        </div>

                        <div className={`h-48 p-4 rounded border font-mono text-sm overflow-y-auto ${
                            theme === 'dark'
                                ? 'bg-gray-900 border-gray-600 text-green-400'
                                : 'bg-white border-gray-300 text-gray-900'
                        }`}>
                            <pre className="whitespace-pre-wrap">{output || 'Output will appear here...'}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}