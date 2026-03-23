---
title: "EPSAL: CPR Education Gap Analysis in California High Schools"
date: "2025-02-23"
description: "Data analysis quantifying the gap in hands-on CPR training requirements across California high schools, supporting legislative advocacy for mandatory CPR and heart screening education."
tags: ["Python", "Data Analysis", "Jupyter Notebook", "Public Policy"]
github: "https://github.com/johnnyli-dev/CPR-CA-DA"
---

In 2009, Eric Paredes, a sophomore athlete at Steele Canyon High School, died suddenly from Sudden Cardiac Arrest. His parents founded the [Eric Paredes Save a Life Foundation](https://www.epsavealife.org) (EPSAL) to prevent this from happening to other families. I worked with EPSAL to produce the data backbone for their legislative advocacy: a comprehensive analysis of which California students lack access to CPR education, and who is most affected.

![The CPR Education Gap in California](/projects/cpr-ca-da/cpr_impact_statement.png)

## The Problem

Using CDE enrollment data and American Heart Association survey data, I identified all 186 school districts without a CPR graduation requirement and mapped every affected high school with full demographic breakdowns.

![CPR Curriculum Status](/projects/cpr-ca-da/cpr_gap_pie.png)

40.1% of California's 1.89 million high school students attend schools with no CPR requirement, that's **757,679 students** across **1,147 schools**.

## The Equity Gap

The gap doesn't affect everyone equally. I broke down the data by race/ethnicity and socioeconomic status, revealing clear disparities.

![Students Without CPR Requirements by Race/Ethnicity](/projects/cpr-ca-da/cpr_gap_by_race.png)

Hispanic/Latino students (42.6%) and Black/African American students (41.7%) are disproportionately affected compared to White students (36.4%). **494,071** combined Black and Hispanic students and **493,041** socioeconomically disadvantaged students lack access to CPR education.

## What I Built

- Identified all 186 CA districts without CPR graduation requirements
- Mapped every high school in those districts with enrollment data
- Produced race/ethnicity and socioeconomic breakdowns of affected students
- Connected no-CPR school zip codes to state Assembly and Senate districts so legislators could see exactly how many of their own constituents were affected

## Legislative Impact

This data became a core part of EPSAL's advocacy for **SB 945**, a bill to mandate CPR/AED training in California schools. The foundation, alongside the American Heart Association and Red Cross, used the analysis directly in meetings with Education Committee members, showing legislators the specific number of students in their districts excluded from life-saving education.

The legislative path has been challenging. The Education Committee pushed back on curriculum changes and the bill was amended to a softer recommendation, but the data continues to be a key resource in the ongoing fight. As the foundation told me: *"everyone loves your data and cites it frequently."*
