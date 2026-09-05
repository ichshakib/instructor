"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  Award,
  BookOpen,
  Layers,
  FolderOpen,
} from "lucide-react";

export interface CourseItem {
  id: string;
  title: string;
  category: "Development" | "AI & Data" | "Design" | "Business";
  type: string;
  typeIcon: "quiz" | "page" | "path" | "lab";
  tag1: string;
  tag2: string;
  badgeCount: string;
  coverVariant:
    | "quiz-clipboard"
    | "video-chapters"
    | "layout-wireframe"
    | "code-architecture"
    | "cloud-backend"
    | "metrics-growth";
  buttonLabel: "View" | "Continue" | "Start";
  description?: string;
}

interface CourseCardProps {
  course: CourseItem;
  onActionClick?: (course: CourseItem) => void;
}

export default function CourseCard({ course, onActionClick }: CourseCardProps) {
  // Render Cover Illustration matching the user's reference mockup
  const renderCoverIllustration = () => {
    switch (course.coverVariant) {
      case "quiz-clipboard":
        return (
          <svg
            viewBox="0 0 400 180"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full block"
            fill="none"
          >
            <rect width="100%" height="100%" fill="url(#grad-amber)" />
            <defs>
              <linearGradient id="grad-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF3C7" />
                <stop offset="100%" stopColor="#FDE68A" />
              </linearGradient>
            </defs>
            <path d="M0 140 L400 100 L400 180 L0 180 Z" fill="#F59E0B" fillOpacity="0.12" />

            {/* Clipboard Graphic */}
            <g transform="translate(65, 12) rotate(-6)">
              <rect x="0" y="0" width="125" height="160" rx="12" fill="#FFFFFF" filter="drop-shadow(0 8px 12px rgba(0,0,0,0.07))" />
              <rect x="36" y="-7" width="52" height="15" rx="5" fill="#D97706" />
              <circle cx="62" cy="0" r="3" fill="#FFFFFF" />

              <rect x="18" y="28" width="14" height="14" rx="3.5" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
              <path d="M21 35 L24 38 L30 31" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="40" y="32" width="65" height="7" rx="3.5" fill="#E5E7EB" />

              <rect x="18" y="54" width="14" height="14" rx="3.5" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
              <path d="M21 61 L24 64 L30 57" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="40" y="58" width="52" height="7" rx="3.5" fill="#E5E7EB" />

              <rect x="18" y="80" width="14" height="14" rx="3.5" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
              <path d="M21 87 L24 90 L30 83" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="40" y="84" width="58" height="7" rx="3.5" fill="#E5E7EB" />

              <rect x="18" y="106" width="14" height="14" rx="3.5" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5" />
              <rect x="40" y="110" width="44" height="7" rx="3.5" fill="#E5E7EB" />
            </g>

            {/* Floating Mobile Wireframe Card */}
            <g transform="translate(225, 16) rotate(8)">
              <rect x="0" y="0" width="90" height="150" rx="14" fill="#3B82F6" filter="drop-shadow(0 10px 16px rgba(59,130,246,0.22))" />
              <rect x="4" y="4" width="82" height="142" rx="11" fill="#FFFFFF" />
              <rect x="10" y="12" width="38" height="7" rx="3.5" fill="#93C5FD" />
              <circle cx="70" cy="16" r="4.5" fill="#3B82F6" />
              <rect x="10" y="26" width="70" height="40" rx="7" fill="#DBEAFE" />
              <path d="M18 52 L34 38 L48 48 L58 42 L70 54" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="10" y="74" width="70" height="5" rx="2.5" fill="#E5E7EB" />
              <rect x="10" y="85" width="50" height="5" rx="2.5" fill="#E5E7EB" />
              <rect x="10" y="96" width="58" height="5" rx="2.5" fill="#E5E7EB" />
              <rect x="10" y="114" width="70" height="15" rx="5" fill="#3B82F6" />
            </g>
          </svg>
        );

      case "video-chapters":
        return (
          <svg
            viewBox="0 0 400 180"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full block"
            fill="none"
          >
            <rect width="100%" height="100%" fill="url(#grad-sky)" />
            <defs>
              <linearGradient id="grad-sky" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="100%" stopColor="#BAE6FD" />
              </linearGradient>
            </defs>

            {/* Tablet Video Frame */}
            <g transform="translate(90, 16)">
              <rect x="0" y="0" width="210" height="142" rx="14" fill="#FFFFFF" filter="drop-shadow(0 10px 20px rgba(2,132,199,0.16))" stroke="#E0F2FE" strokeWidth="1.5" />
              <rect x="9" y="9" width="192" height="124" rx="9" fill="#F0F9FF" />
              <rect x="18" y="18" width="174" height="92" rx="7" fill="#38BDF8" fillOpacity="0.35" />
              <circle cx="105" cy="64" r="22" fill="#0284C7" />
              <path d="M100 53 L116 64 L100 75 Z" fill="#FFFFFF" />
              <rect x="18" y="118" width="174" height="4.5" rx="2.25" fill="#E2E8F0" />
              <rect x="18" y="118" width="75" height="4.5" rx="2.25" fill="#0284C7" />
            </g>

            {/* Stylized Touch interaction */}
            <g transform="translate(245, 95)">
              <circle cx="18" cy="18" r="14" fill="#FDE047" fillOpacity="0.4" />
              <circle cx="18" cy="18" r="9" fill="#FACC15" fillOpacity="0.7" />
              <path d="M18 18 L40 45 L32 54 L16 31 Z" fill="#F59E0B" opacity="0.85" />
            </g>

            {/* Floating picture card in background */}
            <g transform="translate(292, 18) rotate(12)">
              <rect width="60" height="46" rx="7" fill="#FFFFFF" filter="drop-shadow(0 5px 10px rgba(0,0,0,0.05))" />
              <rect x="5" y="5" width="50" height="36" rx="4" fill="#0284C7" fillOpacity="0.2" />
              <circle cx="18" cy="16" r="3.5" fill="#0284C7" />
              <path d="M8 35 L22 22 L34 31 L44 24 L50 35" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" />
            </g>
          </svg>
        );

      case "layout-wireframe":
        return (
          <svg
            viewBox="0 0 400 180"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full block"
            fill="none"
          >
            <rect width="100%" height="100%" fill="url(#grad-peach)" />
            <defs>
              <linearGradient id="grad-peach" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFEDD5" />
                <stop offset="100%" stopColor="#FED7AA" />
              </linearGradient>
            </defs>

            {/* Open Laptop Illustration */}
            <g transform="translate(60, 18)">
              <rect x="18" y="0" width="170" height="102" rx="9" fill="#18191E" filter="drop-shadow(0 12px 18px rgba(0,0,0,0.1))" />
              <rect x="24" y="6" width="158" height="90" rx="5" fill="#FFFFFF" />
              <rect x="34" y="14" width="38" height="74" rx="3.5" fill="#F3F4F6" />
              <rect x="80" y="14" width="92" height="32" rx="3.5" fill="#E0E7FF" />
              <rect x="80" y="52" width="42" height="36" rx="3.5" fill="#F3F4F6" />
              <rect x="130" y="52" width="42" height="36" rx="3.5" fill="#F3F4F6" />
              <path d="M0 102 L206 102 L224 118 L-18 118 Z" fill="#E5E7EB" />
              <rect x="80" y="104" width="46" height="5" rx="2.5" fill="#D1D5DB" />
            </g>

            {/* Typography "Aa" Card */}
            <g transform="translate(250, 20)">
              <rect width="64" height="64" rx="10" fill="#FFFFFF" filter="drop-shadow(0 8px 12px rgba(234,88,12,0.12))" />
              <text x="12" y="42" fontSize="26" fontWeight="800" fill="#EA580C">
                Aa
              </text>
              <rect x="12" y="50" width="38" height="3.5" rx="1.75" fill="#FED7AA" />
            </g>

            {/* 3D Isometric Cube Outline */}
            <g transform="translate(285, 95)">
              <path d="M26 0 L52 14 L26 28 L0 14 Z" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.3" />
              <path d="M0 14 L26 28 L26 52 L0 38 Z" fill="#FDBA74" stroke="#EA580C" strokeWidth="1.3" />
              <path d="M52 14 L26 28 L26 52 L52 38 Z" fill="#FB923C" stroke="#EA580C" strokeWidth="1.3" />
            </g>
          </svg>
        );

      case "code-architecture":
        return (
          <svg
            viewBox="0 0 400 180"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full block"
            fill="none"
          >
            <rect width="100%" height="100%" fill="url(#grad-lavender)" />
            <defs>
              <linearGradient id="grad-lavender" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EDE9FE" />
                <stop offset="100%" stopColor="#DDD6FE" />
              </linearGradient>
            </defs>
            {/* Dark Code Editor Window */}
            <g transform="translate(70, 16)">
              <rect width="250" height="142" rx="12" fill="#18191E" filter="drop-shadow(0 12px 20px rgba(79,70,229,0.16))" />
              <circle cx="16" cy="14" r="4" fill="#EF4444" />
              <circle cx="28" cy="14" r="4" fill="#F59E0B" />
              <circle cx="40" cy="14" r="4" fill="#10B981" />

              <rect x="16" y="34" width="55" height="6" rx="3" fill="#A78BFA" />
              <rect x="78" y="34" width="85" height="6" rx="3" fill="#38BDF8" />
              <rect x="32" y="50" width="100" height="6" rx="3" fill="#F472B6" />
              <rect x="32" y="66" width="65" height="6" rx="3" fill="#FBBF24" />
              <rect x="104" y="66" width="75" height="6" rx="3" fill="#E2E8F0" />
              <rect x="32" y="82" width="130" height="6" rx="3" fill="#34D399" />
              <rect x="16" y="98" width="38" height="6" rx="3" fill="#A78BFA" />
            </g>
            {/* React Symbol Chip */}
            <g transform="translate(42, 85) rotate(-10)">
              <rect width="48" height="48" rx="10" fill="#FFFFFF" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.08))" />
              <circle cx="24" cy="24" r="5" fill="#6366F1" />
              <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#6366F1" strokeWidth="1.8" fill="none" transform="rotate(30 24 24)" />
              <ellipse cx="24" cy="24" rx="16" ry="6" stroke="#6366F1" strokeWidth="1.8" fill="none" transform="rotate(-30 24 24)" />
            </g>
          </svg>
        );

      case "cloud-backend":
        return (
          <svg
            viewBox="0 0 400 180"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full block"
            fill="none"
          >
            <rect width="100%" height="100%" fill="url(#grad-mint)" />
            <defs>
              <linearGradient id="grad-mint" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D1FAE5" />
                <stop offset="100%" stopColor="#A7F3D0" />
              </linearGradient>
            </defs>
            <g transform="translate(90, 20)">
              <path
                d="M36 62 A 22 22 0 0 1 72 44 A 32 32 0 0 1 130 44 A 22 22 0 0 1 162 62 A 16 16 0 0 1 154 94 L40 94 A 18 18 0 0 1 36 62 Z"
                fill="#FFFFFF"
                filter="drop-shadow(0 10px 16px rgba(5,150,105,0.15))"
              />
              <g transform="translate(185, 12)">
                <rect x="0" y="0" width="65" height="82" rx="9" fill="#18191E" />
                <line x1="8" y1="24" x2="57" y2="24" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="16" cy="12" r="2.5" fill="#34D399" />
                <line x1="8" y1="50" x2="57" y2="50" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="16" cy="38" r="2.5" fill="#34D399" />
                <circle cx="16" cy="64" r="2.5" fill="#34D399" />
              </g>
              <path d="M110 94 L110 120 L185 120" stroke="#059669" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" fill="none" />
              <circle cx="185" cy="120" r="4.5" fill="#059669" />
            </g>
          </svg>
        );

      case "metrics-growth":
      default:
        return (
          <svg
            viewBox="0 0 400 180"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full block"
            fill="none"
          >
            <rect width="100%" height="100%" fill="url(#grad-rose)" />
            <defs>
              <linearGradient id="grad-rose" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE4E6" />
                <stop offset="100%" stopColor="#FECDD3" />
              </linearGradient>
            </defs>
            <g transform="translate(80, 16)">
              <rect width="220" height="140" rx="12" fill="#FFFFFF" filter="drop-shadow(0 12px 18px rgba(225,29,72,0.11))" />
              <rect x="22" y="92" width="20" height="30" rx="4" fill="#FDA4AF" />
              <rect x="54" y="70" width="20" height="52" rx="4" fill="#FB7185" />
              <rect x="86" y="50" width="20" height="72" rx="4" fill="#F43F5E" />
              <rect x="118" y="30" width="20" height="92" rx="4" fill="#E11D48" />
              <path d="M22 88 Q 78 54, 148 18" stroke="#9F1239" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M136 16 L150 18 L148 30" stroke="#9F1239" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <g transform="translate(155, 38)">
                <rect width="50" height="24" rx="7" fill="#18191E" />
                <text x="8" y="16" fontSize="11" fontWeight="800" fill="#34D399">
                  +68%
                </text>
              </g>
            </g>
          </svg>
        );
    }
  };

  const getTypeIcon = () => {
    switch (course.typeIcon) {
      case "quiz":
        return <Award className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />;
      case "page":
        return <FileText className="w-3.5 h-3.5 text-orange-500" />;
      case "path":
        return <Layers className="w-3.5 h-3.5 text-purple-500" />;
      case "lab":
      default:
        return <BookOpen className="w-3.5 h-3.5 text-indigo-500" />;
    }
  };

  return (
    <div className="group rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* 1. TOP ILLUSTRATED COVER IMAGE CONTAINER (Reaches flush to top edges) */}
      <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-neutral-100">
        {renderCoverIllustration()}

        {/* Floating Dark Pill Badge on Top Left (e.g. "20 Question ❐") */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold shadow-sm tracking-tight select-none">
          <span>{course.badgeCount}</span>
          <FolderOpen className="w-2.5 h-2.5 opacity-80" />
        </div>
      </div>

      {/* 2. CARD CONTENT BODY */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Type / Meta Header Row (e.g. "Quiz • Certified") */}
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#18191E]">
            {getTypeIcon()}
            <span>{course.type}</span>
          </div>

          {/* Course Title */}
          <h3 className="text-[15px] sm:text-base font-bold text-[#18191E] mt-2 tracking-tight group-hover:text-black leading-snug line-clamp-2">
            {course.title}
          </h3>

          {/* Description (if provided) */}
          {course.description && (
            <p className="text-xs text-[#706E66] mt-1.5 leading-relaxed line-clamp-2 font-normal">
              {course.description}
            </p>
          )}

          {/* Dual Tag Pills (e.g. "UI/UX Design", "Urgent" / "Not Urgent") */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-[#5F5D54] text-[11px] font-medium">
              {course.tag1}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-[#5F5D54] text-[11px] font-medium">
              {course.tag2}
            </span>
          </div>
        </div>

        {/* 3. CARD FOOTER - CLEAN ACTION BUTTON */}
        <div className="pt-3.5 mt-4 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-[11px] font-medium text-[#7A776D]">
            Open Curriculum
          </span>
          <Link
            href="/courses"
            onClick={() => onActionClick?.(course)}
            className="px-4 py-1.5 rounded-lg border border-neutral-300 hover:border-[#18191E] hover:bg-[#18191E] hover:text-white text-xs font-bold text-[#18191E] shadow-sm active:scale-95 transition-all duration-200"
          >
            {course.buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
