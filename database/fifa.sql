-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 09, 2019 at 05:30 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.0.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fifa`
--

-- --------------------------------------------------------

--
-- Table structure for table `playerattributedata`
--

CREATE TABLE `playerattributedata` (
  `Acceleration` int(11) DEFAULT NULL,
  `Aggression` int(11) DEFAULT NULL,
  `Agility` int(11) DEFAULT NULL,
  `Balance` int(11) DEFAULT NULL,
  `Ballcontrol` int(11) DEFAULT NULL,
  `Composure` int(11) DEFAULT NULL,
  `Crossing` int(11) DEFAULT NULL,
  `Curve` int(11) DEFAULT NULL,
  `Dribbling` int(11) DEFAULT NULL,
  `Finishing` int(11) DEFAULT NULL,
  `Freekickaccuracy` int(11) DEFAULT NULL,
  `GKdiving` int(11) DEFAULT NULL,
  `GKhandling` int(11) DEFAULT NULL,
  `GKkicking` int(11) DEFAULT NULL,
  `GKpositioning` int(11) DEFAULT NULL,
  `GKreflexes` int(11) DEFAULT NULL,
  `Headingaccuracy` int(11) DEFAULT NULL,
  `ID` int(11) DEFAULT NULL,
  `Interceptions` int(11) DEFAULT NULL,
  `Jumping` int(11) DEFAULT NULL,
  `Longpassing` int(11) DEFAULT NULL,
  `Longshots` int(11) DEFAULT NULL,
  `Marking` int(11) DEFAULT NULL,
  `Penalties` int(11) DEFAULT NULL,
  `Positioning` int(11) DEFAULT NULL,
  `Reactions` int(11) DEFAULT NULL,
  `Shortpassing` int(11) DEFAULT NULL,
  `Shotpower` int(11) DEFAULT NULL,
  `Slidingtackle` int(11) DEFAULT NULL,
  `Sprintspeed` int(11) DEFAULT NULL,
  `Stamina` int(11) DEFAULT NULL,
  `Standingtackle` int(11) DEFAULT NULL,
  `Strength` int(11) DEFAULT NULL,
  `Vision` int(11) DEFAULT NULL,
  `Volleys` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `playerpersonaldata`
--

CREATE TABLE `playerpersonaldata` (
  `ID` int(11) DEFAULT NULL,
  `Name` varchar(200) DEFAULT NULL,
  `Age` int(11) DEFAULT NULL,
  `Photo` text,
  `Nationality` varchar(200) DEFAULT NULL,
  `Flag` text,
  `Overall` double DEFAULT NULL,
  `Potential` double DEFAULT NULL,
  `Club` varchar(200) DEFAULT NULL,
  `ClubLogo` text,
  `Value` varchar(50) DEFAULT NULL,
  `Wage` varchar(50) DEFAULT NULL,
  `Special` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `playerplayingpositiondata`
--

CREATE TABLE `playerplayingpositiondata` (
  `CAM` int(11) DEFAULT NULL,
  `CB` int(11) DEFAULT NULL,
  `CDM` int(11) DEFAULT NULL,
  `CF` int(11) DEFAULT NULL,
  `CM` int(11) DEFAULT NULL,
  `ID` int(11) DEFAULT NULL,
  `LAM` int(11) DEFAULT NULL,
  `LB` int(11) DEFAULT NULL,
  `LCB` int(11) DEFAULT NULL,
  `LCM` int(11) DEFAULT NULL,
  `LDM` int(11) DEFAULT NULL,
  `LF` int(11) DEFAULT NULL,
  `LM` int(11) DEFAULT NULL,
  `LS` int(11) DEFAULT NULL,
  `LW` int(11) DEFAULT NULL,
  `LWB` int(11) DEFAULT NULL,
  `PreferredPositions` int(11) DEFAULT NULL,
  `RAM` int(11) DEFAULT NULL,
  `RB` int(11) DEFAULT NULL,
  `RCB` int(11) DEFAULT NULL,
  `RCM` int(11) DEFAULT NULL,
  `RDM` int(11) DEFAULT NULL,
  `RF` int(11) DEFAULT NULL,
  `RM` int(11) DEFAULT NULL,
  `RS` int(11) DEFAULT NULL,
  `RW` int(11) DEFAULT NULL,
  `RWB` int(11) DEFAULT NULL,
  `ST` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
