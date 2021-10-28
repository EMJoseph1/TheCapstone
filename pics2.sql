/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `pics2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `pics2` (`id`, `name`, `image`) VALUES
(3, 'Garrad', 'https://drive.google.com/file/d/1DIBAMzAeJMw_V81HpfHSsB97l_npWAwg/view?usp=sharing');
INSERT INTO `pics2` (`id`, `name`, `image`) VALUES
(4, 'C.Payne', 'https://drive.google.com/file/d/1dliZXUEA2eZawfShQMJOVWkT-RaEYHMK/view?usp=sharing');
INSERT INTO `pics2` (`id`, `name`, `image`) VALUES
(5, 'zamira', 'https://drive.google.com/file/d/1zrSm5zeWiOmQ4VAe2V6f-sNyQ-eDE5ol/view?usp=sharing');
INSERT INTO `pics2` (`id`, `name`, `image`) VALUES
(6, 'johanna', 'https://drive.google.com/file/d/1WYSCKeoYKB6OmZl4Yb58Lj5k038Dv9l9/view?usp=sharing'),
(7, 'taj', 'https://drive.google.com/file/d/15Oq2YSYvACoMdGdaY0iYeZ1xQXoqAQ2T/view?usp=sharing'),
(8, 'titus', 'https://drive.google.com/file/d/1bAzr5_rL4UWIfPrUaaU3QWnMVetev0FD/view?usp=sharing'),
(9, 'tyler', 'https://drive.google.com/file/d/1bAzr5_rL4UWIfPrUaaU3QWnMVetev0FD/view?usp=sharing'),
(10, 'thugteo', 'https://drive.google.com/file/d/1ZzzU3lHHnFubQGg3TUgfsNK9NjLMbcgP/view?usp=sharing'),
(11, 'jordan', 'https://drive.google.com/file/d/1d1yAI5zlJmD8V1FsIG7MBDgqg3Bv33UY/view?usp=sharing'),
(12, 'teo', 'https://imgur.com/CPV26QQ'),
(13, 'teo', 'https://imgur.com/CPV26QQ');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;