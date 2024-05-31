-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: May 30, 2024 at 06:43 PM
-- Server version: 8.1.0
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `machine-record`
--

-- --------------------------------------------------------

--
-- Table structure for table `Air_Blower`
--

CREATE TABLE `Air_Blower` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `A2` varchar(255) DEFAULT NULL,
  `A3` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Air_Flow`
--

CREATE TABLE `Air_Flow` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `Flow` varchar(255) DEFAULT NULL,
  `valve_percentage` int DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Anoxic_Mixer`
--

CREATE TABLE `Anoxic_Mixer` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `A2` varchar(255) DEFAULT NULL,
  `A3` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Auto_Sampler`
--

CREATE TABLE `Auto_Sampler` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Biofilter`
--

CREATE TABLE `Biofilter` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Chiller`
--

CREATE TABLE `Chiller` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Chiller_Water_Pump`
--

CREATE TABLE `Chiller_Water_Pump` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `A2` varchar(255) DEFAULT NULL,
  `A3` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Clarifier`
--

CREATE TABLE `Clarifier` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) NOT NULL,
  `record_date` date NOT NULL,
  `record_time` time NOT NULL,
  `status` varchar(255) NOT NULL,
  `A_motor1` varchar(255) DEFAULT NULL,
  `A_motor2` varchar(255) DEFAULT NULL,
  `A_scum` varchar(255) DEFAULT NULL,
  `A_pump` varchar(255) DEFAULT NULL,
  `T_motor` varchar(255) DEFAULT NULL,
  `T_scum` varchar(255) DEFAULT NULL,
  `T_pump` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Coarse_Screen`
--

CREATE TABLE `Coarse_Screen` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `T_1` varchar(255) DEFAULT NULL,
  `T_2` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Drainage_Pump`
--

CREATE TABLE `Drainage_Pump` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `A2` varchar(255) DEFAULT NULL,
  `A3` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Effluent_Pump`
--

CREATE TABLE `Effluent_Pump` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `A2` varchar(255) DEFAULT NULL,
  `A3` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Fine_Screen`
--

CREATE TABLE `Fine_Screen` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Garden_Pump`
--

CREATE TABLE `Garden_Pump` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inlet_gate`
--

CREATE TABLE `inlet_gate` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `gate_percentage` int DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Inlet_Pumping`
--

CREATE TABLE `Inlet_Pumping` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `A2` varchar(255) DEFAULT NULL,
  `A3` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Recorder`
--

CREATE TABLE `Recorder` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `recorder_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Record_Note`
--

CREATE TABLE `Record_Note` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `Note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Scum_Pump_Fan_Room6`
--

CREATE TABLE `Scum_Pump_Fan_Room6` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `A2` varchar(255) DEFAULT NULL,
  `A3` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` char(60) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `last_login` timestamp NULL DEFAULT NULL,
  `role` varchar(50) DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password_hash`, `created_at`, `updated_at`, `last_login`, `role`) VALUES
(1, 'example_username', 'example@example.com', '$2a$10$g0GKoUpuX.bL/172pHRzxe/Kc5.jCm5PLVd5vi1.ZLdIfwyX3PJDe', '2024-05-02 16:22:02', '2024-05-02 16:22:25', NULL, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `Ventilation_Fan_Room1`
--

CREATE TABLE `Ventilation_Fan_Room1` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `A2` varchar(255) DEFAULT NULL,
  `A3` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Ventilation_Fan_Room2`
--

CREATE TABLE `Ventilation_Fan_Room2` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `A2` varchar(255) DEFAULT NULL,
  `A3` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Ventilation_Fan_Room3`
--

CREATE TABLE `Ventilation_Fan_Room3` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `A2` varchar(255) DEFAULT NULL,
  `A3` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Ventilation_Fan_Room4`
--

CREATE TABLE `Ventilation_Fan_Room4` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `A2` varchar(255) DEFAULT NULL,
  `A3` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Ventilation_Fan_Room5`
--

CREATE TABLE `Ventilation_Fan_Room5` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `A2` varchar(255) DEFAULT NULL,
  `A3` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Ventilation_Fan_Room6`
--

CREATE TABLE `Ventilation_Fan_Room6` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `A2` varchar(255) DEFAULT NULL,
  `A3` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Ventilation_Inlet_Pumping_Station`
--

CREATE TABLE `Ventilation_Inlet_Pumping_Station` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `A1` varchar(255) DEFAULT NULL,
  `A2` varchar(255) DEFAULT NULL,
  `A3` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Vortex_Grit`
--

CREATE TABLE `Vortex_Grit` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `T` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Water_Pump`
--

CREATE TABLE `Water_Pump` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `machine_name` varchar(255) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `record_time` time DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Air_Blower`
--
ALTER TABLE `Air_Blower`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Air_Flow`
--
ALTER TABLE `Air_Flow`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Anoxic_Mixer`
--
ALTER TABLE `Anoxic_Mixer`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Auto_Sampler`
--
ALTER TABLE `Auto_Sampler`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Biofilter`
--
ALTER TABLE `Biofilter`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Chiller`
--
ALTER TABLE `Chiller`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Chiller_Water_Pump`
--
ALTER TABLE `Chiller_Water_Pump`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Clarifier`
--
ALTER TABLE `Clarifier`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Coarse_Screen`
--
ALTER TABLE `Coarse_Screen`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Drainage_Pump`
--
ALTER TABLE `Drainage_Pump`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Effluent_Pump`
--
ALTER TABLE `Effluent_Pump`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Fine_Screen`
--
ALTER TABLE `Fine_Screen`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Garden_Pump`
--
ALTER TABLE `Garden_Pump`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `inlet_gate`
--
ALTER TABLE `inlet_gate`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Inlet_Pumping`
--
ALTER TABLE `Inlet_Pumping`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Recorder`
--
ALTER TABLE `Recorder`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Record_Note`
--
ALTER TABLE `Record_Note`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Scum_Pump_Fan_Room6`
--
ALTER TABLE `Scum_Pump_Fan_Room6`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `Ventilation_Fan_Room1`
--
ALTER TABLE `Ventilation_Fan_Room1`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Ventilation_Fan_Room2`
--
ALTER TABLE `Ventilation_Fan_Room2`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Ventilation_Fan_Room3`
--
ALTER TABLE `Ventilation_Fan_Room3`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Ventilation_Fan_Room4`
--
ALTER TABLE `Ventilation_Fan_Room4`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Ventilation_Fan_Room5`
--
ALTER TABLE `Ventilation_Fan_Room5`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Ventilation_Fan_Room6`
--
ALTER TABLE `Ventilation_Fan_Room6`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Ventilation_Inlet_Pumping_Station`
--
ALTER TABLE `Ventilation_Inlet_Pumping_Station`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Vortex_Grit`
--
ALTER TABLE `Vortex_Grit`
  ADD PRIMARY KEY (`record_id`);

--
-- Indexes for table `Water_Pump`
--
ALTER TABLE `Water_Pump`
  ADD PRIMARY KEY (`record_id`);


COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
