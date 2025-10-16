import React from "react";
import Navbar from "../components/Navbar";

// Dummy UI components since you may not have shadcn/ui setup
// If you do, replace these with imports from "@/components/ui"
const Card = ({ children, className }) => (
  <div className={`bg-white rounded-2xl shadow ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Badge = ({ children, className }) => (
  <span
    className={`px-2 py-1 text-xs font-medium rounded-lg ${className}`}
  >
    {children}
  </span>
);

const Progress = ({ value, className }) => (
  <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
    <div
      className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

export default function AnalyseResume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-50 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left Side - Dummy Resume PDF Placeholder */}
      <Card className="flex items-center justify-center w-[80vh] ml-12">
        <CardContent className="flex flex-col items-center justify-center w-full h-full">
          <div className="bg-gray-200 w-full h-full flex items-center justify-center rounded-lg border border-dashed border-gray-400">
            <p className="text-gray-600 text-lg font-medium">
              Dummy Resume PDF Preview
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Right Side - Resume Review */}
      <Card className="p-1 mr-12">
        <CardContent>
          <h2 className="text-2xl font-bold mb-3">Resume Review</h2>

          {/* Score */}
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-green-400 to-green-300 flex items-center justify-center text-white text-sl font-bold">
              88/100
            </div>
            <div className="ml-4">
              <p className="font-semibold text-gray-700">Your Resume Score</p>
              <p className="text-sm text-gray-500">
                This score is calculated based on the variables listed below.
              </p>
            </div>
          </div>

          {/* Breakdown */}
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Tone & Style</span>
                <Badge className="bg-yellow-100 text-yellow-700">Good Start</Badge>
              </div>
              <Progress value={55} className="mt-2" />
              <p className="text-sm text-gray-500 mt-1">55/100</p>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Structure</span>
                <Badge className="bg-green-100 text-green-700">Strong</Badge>
              </div>
              <Progress value={70} className="mt-2" />
              <p className="text-sm text-gray-500 mt-1">70/100</p>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Content</span>
                <Badge className="bg-red-100 text-red-700">Needs Work</Badge>
              </div>
              <Progress value={25} className="mt-2" />
              <p className="text-sm text-gray-500 mt-1">25/100</p>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Skills</span>
                <Badge className="bg-red-100 text-red-700">Needs Work</Badge>
              </div>
              <Progress value={32} className="mt-2" />
              <p className="text-sm text-gray-500 mt-1">32/100</p>
            </div>
          </div>

          {/* ATS Score */}
          <div className="mt-8 p-4 rounded-xl bg-red-50 border border-red-200">
            <h3 className="font-semibold text-red-700 mb-2">ATS Score - 42/100</h3>
            <p className="text-sm text-gray-600 mb-2">
              How well does your resume pass through Applicant Tracking Systems?
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>No clear formatting, non-readable by ATS</li>
              <li>Missing keywords relevant to the job</li>
              <li>No skills section detected</li>
            </ul>
            <p className="text-sm text-gray-500 mt-3">
              Want a better score? Improve your resume by applying the suggestions
              listed below.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
