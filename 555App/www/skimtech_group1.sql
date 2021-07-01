-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2021 at 10:14 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `group1_555`
--

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `itemsprice` varchar(400) NOT NULL,
  `total` varchar(50) NOT NULL,
  `owneremail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `date`, `itemsprice`, `total`, `owneremail`) VALUES
(1, '2021-06-07', '- Ikan RM3\n- Ayam RM10\n', 'RM13', 'syazaidy@gmail.com'),
(2, '2021-06-15', '- Arnab (RM50)\n- Kucing (RM100)', 'RM150', 'syazaidy@gmail.com'),
(7, '2021-06-27', '- Nasi putih (RM1)\n- Ayam goreng (RM3)\n- Air green tea (RM1)', 'RM5', 'syazaidy@gmail.com'),
(8, '2021-06-30', '- Pavlova (RM60)', 'RM60', 'syazaidy@gmail.com'),
(10, '2021-06-30', '- Ayam Goreng (RM3)', 'RM3', 'syazaty@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `addedDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `owneremail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `nickname`, `email`, `username`, `password`, `phone`, `addedDate`, `owneremail`) VALUES
(1, 'CIMB CLICK  ', 'sya_iz98@icloud.com', 'syazanurizzati', 'Syaza300698?', '0148067823', '2021-06-13 06:37:50', 'syazaty@gmail.com'),
(2, 'TWITTER', 's56485@ocean.umt.edu.my', 'syazaty', 'Izzati98', '0168569854', '2021-06-13 06:37:53', 'syazaty@gmail.com'),
(3, 'CIMB CLICK          ', 'syazwan1908@gmail.com', 'syaz0008', 'syazwan2019', '0199658758', '2021-06-28 15:14:53', 'syazaidy@gmail.com'),
(10, 'INSTAGRAM    ', 'syazwan00@gmail.com', 'syazaidy', 'syazaidy00', '0168954785', '2021-06-28 14:15:16', 'syazaidy@gmail.com'),
(12, 'TWITTER  ', 'syazwan@gmail.com', 'syazdy', '123456', '0168569854', '2021-06-27 10:19:06', 'syazaidy@gmail.com'),
(14, 'RHB BANK ', 'syazwan00@gmail.com', 'syazwan', 'syaz1908', '0157859875', '2021-06-29 07:48:39', 'syazaidy@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `email` varchar(50) NOT NULL,
  `password` varchar(10) NOT NULL,
  `last_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`email`, `password`, `last_login`) VALUES
('amani@gmail.com', 'amani', '2021-06-26 17:09:31'),
('nurulamani@gmail.com', 'nurulamani', '2021-06-29 07:47:17'),
('shahira@gmail.com', 'shahira', '2021-06-26 18:01:43'),
('syazaidy@gmail.com', 'syazaidy', '2021-06-11 07:00:37'),
('syazaty@gmail.com', 'syazaty', '2021-06-11 07:00:01');

-- --------------------------------------------------------

--
-- Table structure for table `studies`
--

CREATE TABLE `studies` (
  `id` int(11) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `notes` varchar(200) NOT NULL,
  `owneremail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studies`
--

INSERT INTO `studies` (`id`, `subject`, `notes`, `owneremail`) VALUES
(1, 'Front-End Programming         ', '- https://www.youtube.com', 'syazaidy@gmail.com'),
(2, 'Multimedia    ', '- https://www.instagram.com/', 'syazaidy@gmail.com'),
(3, 'IOT  ', '- www.iot.com', 'syazaidy@gmail.com'),
(4, 'Web Design   ', '- https://www.w3schools.com/', 'syazaidy@gmail.com'),
(5, 'Database Design ', '- www.database.com\n- www.youtube.com', 'syazaidy@gmail.com'),
(6, 'PROGRAMMING ', '- www.youtube.com', 'syazaty@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `studies`
--
ALTER TABLE `studies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `studies`
--
ALTER TABLE `studies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
