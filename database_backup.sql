-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.3.16-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para new
DROP DATABASE IF EXISTS `new`;
CREATE DATABASE IF NOT EXISTS `new` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `new`;

-- Copiando estrutura para tabela new.agapes
CREATE TABLE IF NOT EXISTS `agapes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_user` bigint(20) unsigned NOT NULL,
  `agape` varchar(100) NOT NULL,
  `data` date DEFAULT NULL,
  `ativo` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__users` (`id_user`),
  CONSTRAINT `FK__users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela new.agapes: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `agapes` DISABLE KEYS */;
INSERT INTO `agapes` (`id`, `id_user`, `agape`, `data`, `ativo`, `created_at`, `updated_at`) VALUES
	(4, 27, 'Teste 5', '2019-10-17', 1, '2019-10-17 16:32:26', '2019-10-17 16:32:26'),
	(8, 27, 'teste 2', '2019-10-28', 1, '2019-10-28 15:23:02', '2019-10-28 15:23:02'),
	(10, 27, 'Teste oficial', '2019-10-28', 1, '2019-10-28 15:43:19', '2019-10-28 15:43:19'),
	(11, 27, 'Teste com data', '2019-10-28', 1, '2019-10-28 15:46:31', '2019-10-28 15:46:31'),
	(12, 27, 'teste', '2019-10-28', 1, '2019-10-28 15:49:42', '2019-10-28 15:49:42'),
	(13, 27, 'Teste com break', '2019-10-28', 1, '2019-10-28 15:52:45', '2019-11-19 16:01:12'),
	(14, 27, 'Teste4', '2019-10-28', 1, '2019-10-28 16:26:11', '2019-10-28 16:30:26');
/*!40000 ALTER TABLE `agapes` ENABLE KEYS */;

-- Copiando estrutura para tabela new.avental
CREATE TABLE IF NOT EXISTS `avental` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `avental` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.avental: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `avental` DISABLE KEYS */;
INSERT INTO `avental` (`id`, `avental`, `created_at`, `updated_at`) VALUES
	(1, 'avental1', '2019-09-27 12:14:50', NULL);
/*!40000 ALTER TABLE `avental` ENABLE KEYS */;

-- Copiando estrutura para tabela new.cargos
CREATE TABLE IF NOT EXISTS `cargos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `cargo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.cargos: ~25 rows (aproximadamente)
/*!40000 ALTER TABLE `cargos` DISABLE KEYS */;
INSERT INTO `cargos` (`id`, `cargo`, `created_at`, `updated_at`) VALUES
	(1, 'Tesoureiro Adjunto', NULL, NULL),
	(2, 'Mestre de Cerimonias', NULL, NULL),
	(3, 'Tesoureiro', NULL, NULL),
	(4, 'Venerável', NULL, NULL),
	(5, 'Paste master', NULL, NULL),
	(6, 'Primeiro Vigilante', NULL, NULL),
	(7, 'Segundo Vigilante', NULL, NULL),
	(8, 'Orador', NULL, NULL),
	(9, 'Secretário', NULL, NULL),
	(10, 'Harmonia', NULL, NULL),
	(11, 'Banquetes', NULL, NULL),
	(12, 'Cobridor', NULL, NULL),
	(13, 'Cobridor Externo', NULL, NULL),
	(14, 'Primeiro Diácono', NULL, NULL),
	(15, 'Segundo Diácono', NULL, NULL),
	(16, 'Experto I', NULL, NULL),
	(17, 'Experto II', NULL, NULL),
	(18, 'Chanceler', NULL, NULL),
	(19, 'Porta Estandarte', NULL, NULL),
	(20, 'Porta Espadas', NULL, NULL),
	(21, 'Bibliotecário', NULL, NULL),
	(22, 'Arquiteto', NULL, NULL),
	(23, 'Hospitaleiro', NULL, NULL),
	(24, 'Porta Bandeira', NULL, NULL),
	(25, 'Nenhum', '2019-11-04 09:14:13', '2019-11-04 09:14:14');
/*!40000 ALTER TABLE `cargos` ENABLE KEYS */;

-- Copiando estrutura para tabela new.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.failed_jobs: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;

-- Copiando estrutura para tabela new.familias
CREATE TABLE IF NOT EXISTS `familias` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_users` bigint(20) unsigned NOT NULL,
  `grau` varchar(50) NOT NULL DEFAULT '',
  `data_nasc` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__id_users` (`id_users`),
  CONSTRAINT `FK__id_users` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela new.familias: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `familias` DISABLE KEYS */;
INSERT INTO `familias` (`id`, `id_users`, `grau`, `data_nasc`, `created_at`, `updated_at`) VALUES
	(1, 28, 'Irmão', '2019-11-01', '2019-11-01 16:42:38', '2019-11-01 16:42:38'),
	(2, 28, 'Mãe', '2019-11-01', '2019-11-01 16:42:52', '2019-11-01 16:42:52'),
	(3, 28, 'Irmã', '2019-11-01', '2019-11-01 16:44:11', '2019-11-01 16:44:11'),
	(4, 1, 'Tio', '2019-11-01', '2019-11-01 16:45:14', '2019-11-01 16:45:14'),
	(10, 40, 'Irmã', '2019-11-05', '2019-11-05 16:18:24', '2019-11-05 16:18:24'),
	(11, 41, 'Irmão', '1995-12-30', '2019-11-05 16:29:22', '2019-11-05 16:29:22');
/*!40000 ALTER TABLE `familias` ENABLE KEYS */;

-- Copiando estrutura para tabela new.financeiros
CREATE TABLE IF NOT EXISTS `financeiros` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_user` bigint(20) unsigned NOT NULL,
  `data_pag` date DEFAULT NULL,
  `mes` varchar(10) NOT NULL,
  `valor` varchar(50) NOT NULL DEFAULT '0',
  `nome` varchar(50) DEFAULT ' ',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__user` (`id_user`),
  CONSTRAINT `FK__user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela new.financeiros: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `financeiros` DISABLE KEYS */;
INSERT INTO `financeiros` (`id`, `id_user`, `data_pag`, `mes`, `valor`, `nome`, `created_at`, `updated_at`) VALUES
	(15, 27, NULL, 'Outubro', '120', 'Natalia Sakai', '2019-10-30 16:24:33', '2019-10-31 16:50:36'),
	(16, 28, NULL, 'Outubro', '120', 'a a', '2019-10-30 16:24:33', '2019-10-30 16:24:33'),
	(17, 1, NULL, 'Outubro', '120', 'Isabela Fernandes', '2019-10-30 16:24:33', '2019-10-30 16:24:33'),
	(21, 27, '2019-11-05', 'Novembro', '50', 'Natalia Sakai', '2019-11-01 15:09:50', '2019-11-05 12:32:00'),
	(22, 28, '2019-11-11', 'Novembro', '50', 'a a', '2019-11-01 15:09:50', '2019-11-11 15:03:37'),
	(23, 1, NULL, 'Novembro', '50', 'Isabela Fernandes', '2019-11-01 15:09:50', '2019-11-01 15:09:50');
/*!40000 ALTER TABLE `financeiros` ENABLE KEYS */;

-- Copiando estrutura para tabela new.informativo
CREATE TABLE IF NOT EXISTS `informativo` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `info` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `id_user` bigint(20) unsigned NOT NULL,
  `nivel` int(11) NOT NULL,
  `ativo` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `informativo_id_user_foreign` (`id_user`),
  CONSTRAINT `informativo_id_user_foreign` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.informativo: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `informativo` DISABLE KEYS */;
INSERT INTO `informativo` (`id`, `info`, `id_user`, `nivel`, `ativo`, `created_at`, `updated_at`) VALUES
	(1, 'API funcionando', 27, 1, 1, '2019-10-14 10:49:33', '2019-10-14 10:49:34'),
	(4, 'instalar o passport', 27, 1, 1, '2019-10-15 15:08:57', '2019-10-15 15:08:57'),
	(8, 'Teste', 27, 1, 1, '2019-10-28 16:02:20', '2019-10-28 16:02:20'),
	(9, 'data', 27, 2, 1, '2019-10-28 16:03:24', '2019-10-28 16:03:24'),
	(10, 'firebase', 27, 3, 1, '2019-10-28 16:04:09', '2019-10-28 16:33:42'),
	(11, 'teste no servidor', 27, 1, 1, '2019-11-27 16:36:28', '2019-11-27 16:36:28');
/*!40000 ALTER TABLE `informativo` ENABLE KEYS */;

-- Copiando estrutura para tabela new.lista_presencas
CREATE TABLE IF NOT EXISTS `lista_presencas` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_user` bigint(20) unsigned NOT NULL,
  `reuniao` bigint(20) unsigned NOT NULL,
  `presenca` int(11) NOT NULL,
  `motivo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_lista_presencas_users` (`id_user`),
  KEY `FK_lista_presencas_reuniao` (`reuniao`),
  CONSTRAINT `FK_lista_presencas_reuniao` FOREIGN KEY (`reuniao`) REFERENCES `reuniao` (`id`),
  CONSTRAINT `FK_lista_presencas_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.lista_presencas: ~12 rows (aproximadamente)
/*!40000 ALTER TABLE `lista_presencas` DISABLE KEYS */;
INSERT INTO `lista_presencas` (`id`, `id_user`, `reuniao`, `presenca`, `motivo`, `created_at`, `updated_at`) VALUES
	(1, 1, 4, 0, 'Aula', '2019-10-16 11:23:58', '2019-10-16 11:23:58'),
	(2, 27, 1, 1, '-', '2019-10-16 11:24:16', '2019-10-18 13:28:33'),
	(3, 27, 2, 1, '-', '2019-10-16 12:17:07', '2019-10-18 13:28:33'),
	(4, 27, 4, 1, '-', '2019-10-18 13:41:20', '2019-10-18 14:03:24'),
	(5, 27, 5, 0, 'Teste', '2019-10-23 11:01:39', '2019-10-25 12:51:50'),
	(6, 1, 5, 1, 'teste 4', '2019-10-23 11:01:38', '2019-10-28 16:44:57'),
	(9, 27, 6, 1, '-', '2019-10-30 14:33:29', '2019-11-05 12:33:24'),
	(10, 1, 6, 1, '-', '2019-10-31 09:14:07', '2019-10-31 09:14:12'),
	(11, 27, 7, 1, '-', '2019-11-05 12:34:01', '2019-11-12 13:53:33'),
	(12, 27, 8, 1, '-', '2019-11-12 13:54:02', '2019-11-19 16:02:08'),
	(13, 27, 9, 1, '-', '2019-11-19 16:02:18', '2019-11-26 12:46:58'),
	(14, 27, 10, 0, 'aula', '2019-11-26 12:47:09', '2019-11-27 16:38:09');
/*!40000 ALTER TABLE `lista_presencas` ENABLE KEYS */;

-- Copiando estrutura para tabela new.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.migrations: ~14 rows (aproximadamente)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2000_09_10_0000000_create_avental', 1),
	(3, '2014_10_12_000000_create_users_table', 1),
	(4, '2014_10_12_100000_create_password_resets_table', 1),
	(5, '2015_09_10_000000_create_ordem', 1),
	(6, '2015_09_10_00000_create_info', 1),
	(7, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
	(8, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
	(9, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
	(10, '2016_06_01_000004_create_oauth_clients_table', 1),
	(11, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
	(12, '2019_08_19_000000_create_failed_jobs_table', 1),
	(13, '2019_09_10_0000000_create_lista_presenca', 1),
	(14, '2019_09_10_000000_create_reuniao', 1),
	(15, '2000_09_10_000000_create_cargos', 2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Copiando estrutura para tabela new.mural
CREATE TABLE IF NOT EXISTS `mural` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_users` bigint(20) unsigned NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `texto` varchar(100) NOT NULL,
  `ativo` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__id_user` (`id_users`),
  CONSTRAINT `FK__id_user` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela new.mural: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `mural` DISABLE KEYS */;
INSERT INTO `mural` (`id`, `id_users`, `nome`, `texto`, `ativo`, `created_at`, `updated_at`) VALUES
	(1, 27, 'Natalia Sakai', 'Primeira edição no celular', NULL, '2019-10-23 12:37:44', '2019-11-22 15:52:34'),
	(2, 1, 'Isabela Fernandes', 'Segundo item do mural', NULL, '2019-10-23 13:13:22', '2019-11-26 09:32:09'),
	(5, 27, 'Natalia Sakai', 'Terceiro item do mural', NULL, '2019-10-28 16:13:14', '2019-11-12 12:25:05'),
	(9, 40, 'Daniela Silva', 'Primeiro mural da Daniela aqui no site, teste para quantidade de caracteres', NULL, '2019-11-05 16:19:29', '2019-11-05 16:19:29'),
	(10, 40, 'Daniela Silva', 'Segundo mural da Daniela, teste 2, falha no reload da pagina, agora vai', NULL, '2019-11-05 16:20:35', '2019-11-05 16:20:35'),
	(11, 40, 'Daniela Silva', 'Terceiro teste aqui, quantidade de caracteres necessário para dar duas linhas para ver o tamanho', NULL, '2019-11-05 16:21:46', '2019-11-05 16:21:46'),
	(12, 27, 'Natalia Sakai', 'Mural com nome salvo no banco', NULL, '2019-11-26 12:28:14', '2019-11-26 12:28:14');
/*!40000 ALTER TABLE `mural` ENABLE KEYS */;

-- Copiando estrutura para tabela new.oauth_access_tokens
CREATE TABLE IF NOT EXISTS `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.oauth_access_tokens: ~39 rows (aproximadamente)
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
	('02f7758944b1f723d29df1274cebb4973e0a81ff014d77a4b17bca0245f63b52c49f11dbc6e3bcc1', 28, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-05 15:24:36', '2019-11-05 15:24:36', '2020-11-05 15:24:36'),
	('0eab1d1f66254b324dfdaf69cda7315554131d65c1f7a5878d1c9e6d8f654fb127be26cec977b9fb', 27, 6, 'Token de acesso pessoal', '[]', 1, '2019-10-18 15:57:49', '2019-10-18 15:57:49', '2020-10-18 15:57:49'),
	('0ee255f72ddd0bbb2ed20ce46132741ab4917e55c1ee1ed5d01c1c00b4132bf26a1e98025353cb06', 27, 6, 'Token de acesso pessoal', '[]', 0, '2019-11-27 16:35:50', '2019-11-27 16:35:50', '2020-11-27 16:35:50'),
	('103b1c9f138d14dc332229015cc84642c73388c80d4f464f332af69f76f03d5f170ad003dd1ca00c', 27, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-05 16:23:22', '2019-11-05 16:23:22', '2020-11-05 16:23:22'),
	('1423e73910ac26bd803d54becdd3ed62910651c1edb1368a147cd5e953ac81701faf000607c43a6b', 27, 6, 'Token de acesso pessoal', '[]', 1, '2019-10-18 16:04:24', '2019-10-18 16:04:24', '2020-10-18 16:04:24'),
	('221530d924a1a6ddec00f318a50d90dfa8ddbd77684ec29051d79f09799ee779bb28a1835f4edbb7', 27, 6, 'Token de acesso pessoal', '[]', 0, '2019-11-27 12:35:44', '2019-11-27 12:35:44', '2020-11-27 12:35:44'),
	('251623c82df907b94daf763974f5e0a06093102b20c80023d53d84caf6d65cc27a7b10717153721a', 41, 6, 'Token de acesso pessoal', '[]', 0, '2019-11-05 16:27:47', '2019-11-05 16:27:47', '2020-11-05 16:27:47'),
	('3a266b6fddc1373117b4de847e0756d283f1348b9e6be26305a187b9b54c7ffd48cd0cc7354d3371', 28, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-05 15:31:09', '2019-11-05 15:31:09', '2020-11-05 15:31:09'),
	('4eb1ed9c36c9861616288cec03b27770f6bafb4c918af354cf81d343f83301bbe41c36225f19a224', 27, 6, 'Token de acesso pessoal', '[]', 0, '2019-11-27 16:37:06', '2019-11-27 16:37:06', '2020-11-27 16:37:06'),
	('569de44d069778c07f7e7e098cac81ad562904efc8bffc34c0b1a8e4f0220b2b4255434a4dd5fd4b', 27, 6, 'Token de acesso pessoal', '[]', 0, '2019-10-29 12:51:28', '2019-10-29 12:51:28', '2020-10-29 12:51:28'),
	('608878ba641672bb353eee7e6e6d0d6b7597655fa76911ec02f3c46aee8b9a3f86c68a10a87f6b08', 27, 6, 'Token de acesso pessoal', '[]', 0, '2019-11-07 17:00:18', '2019-11-07 17:00:18', '2020-11-07 17:00:18'),
	('71e90380915f3aac2293954f834f31c1b6aceffe4e67139cc91bf10be53dd5965745b787aa9cbf3c', 27, 6, 'Token de acesso pessoal', '[]', 0, '2019-11-27 16:25:23', '2019-11-27 16:25:23', '2020-11-27 16:25:23'),
	('732b5e8faf7f9210fe56673819979aa516a275fb104cf579120a831b4e6d6d1afc764ae9a620eda8', 28, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-05 15:26:34', '2019-11-05 15:26:34', '2020-11-05 15:26:34'),
	('73ce2ad7074af23c7e1c0c67eda997ea271f73503fc4a6e126d15a26d9a24181b9cea94574271083', 28, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-05 15:33:04', '2019-11-05 15:33:04', '2020-11-05 15:33:04'),
	('7582624de871d4503ea88cbef39d78e8bc075fad038d5e405bc2d2ac2724c2aa5bf945443656f5ae', 28, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-05 15:27:20', '2019-11-05 15:27:20', '2020-11-05 15:27:20'),
	('798d1633202df34ea5e47a1e468cb133d7bf376895428d5afb5eac9c0d4e3199acd384919b52eb95', 27, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-26 16:43:59', '2019-11-26 16:43:59', '2020-11-26 16:43:59'),
	('7a76526039840a5fcff34f18abd1774527dffaebd6a5668ad1b43939a5efda04fc1be16d1c03d42d', 27, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-05 16:16:32', '2019-11-05 16:16:32', '2020-11-05 16:16:32'),
	('7c921c528504f90e087794acb23fc4b4487699ef5efe4ba5194e8279f68c1dc728d86f68a3a28adc', 27, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-22 15:15:21', '2019-11-22 15:15:21', '2020-11-22 15:15:21'),
	('7f781e279cba54ce34555a15a42ad6902afd7912923d1e045768c129900994c650520eb266b7af29', 27, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-22 14:38:29', '2019-11-22 14:38:29', '2020-11-22 14:38:29'),
	('8895364ee3246ffc23d57c4f8fb78d19faf1a82ee395b65bfb7064331b9b0b5a97e3025a652d904b', 28, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-05 15:36:24', '2019-11-05 15:36:24', '2020-11-05 15:36:24'),
	('8add4f594321f11e46ccecc33a87e687072b5d7458669af55d7506da74088af821fa7adceb05befa', 27, 6, 'Token de acesso pessoal', '[]', 0, '2019-11-26 16:43:39', '2019-11-26 16:43:39', '2020-11-26 16:43:39'),
	('9234232ece10bf56a34d89d38e003736efb7fe8868d213bf0bd69c3c94c44630d504dafc4a435be2', 27, 6, 'Token de acesso pessoal', '[]', 0, '2019-11-27 16:23:01', '2019-11-27 16:23:01', '2020-11-27 16:23:01'),
	('9300fd715f8ef3a8c7b5a5a34ad9e8e61047ccfe7003bd59cf8ca7a463fe79746d27af2168e9b704', 27, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-26 16:23:57', '2019-11-26 16:23:57', '2020-11-26 16:23:57'),
	('9335a9b50c491d29d366524593e2172686f5c2b0582e64e9baae72511fe1fefa50d56aabe01b81c7', 27, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-22 15:25:31', '2019-11-22 15:25:31', '2020-11-22 15:25:31'),
	('9b6e1d8a087ab070bf0498daa80076097215999fe97af90057bba04d850ecda56d38daa7925288a3', 1, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-20 15:58:42', '2019-11-20 15:58:42', '2020-11-20 15:58:42'),
	('9eb94238f320fb6223a88b7dd83c6c32fc0f10309fdaa81b7fdba082d423fbbb2b719ec88d08e9d9', 27, 6, 'Token de acesso pessoal', '[]', 1, '2019-10-24 12:27:52', '2019-10-24 12:27:52', '2020-10-24 12:27:52'),
	('a825d5b4f5106909e01c00de764a21990433efdf06f98f792779d6dcdaea1e4d10c64bd7c94ea41e', 28, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-05 15:22:31', '2019-11-05 15:22:31', '2020-11-05 15:22:31'),
	('ae281d9ab840239f77fe147033a3b0ba2c32bf95e29b1c76541cbeb530c72ab85b09be2bb9f2fc3d', 27, 6, 'Token de acesso pessoal', '[]', 0, '2019-11-26 16:42:42', '2019-11-26 16:42:42', '2020-11-26 16:42:42'),
	('b5114a4dd3c07f588426dc74a3f14fa3d3514fd2e3dbb89d5ee671b61e767ac426e5d978bcc3e803', 28, 6, 'Token de acesso pessoal', '[]', 1, '2019-10-18 16:01:58', '2019-10-18 16:01:58', '2020-10-18 16:01:58'),
	('bbd6a1f2b19094ce51ddcd14f8076c6b856449cf7195f675dbf36277cf1e1bf70b451cdb31380751', 28, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-05 15:38:42', '2019-11-05 15:38:42', '2020-11-05 15:38:42'),
	('bbfa9c7ebb21459e60718dc3d1291eda094916d77e54a99ff5300a0a9ddb64614008f5489e7514fb', 28, 6, 'Token de acesso pessoal', '[]', 1, '2019-10-18 16:10:33', '2019-10-18 16:10:33', '2020-10-18 16:10:33'),
	('c46d0cf6660d237f99614e2bbfbd5e14de1283cbd00d23bd5ac8226a73d372d189f7e767779ca221', 28, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-05 15:41:10', '2019-11-05 15:41:10', '2020-11-05 15:41:10'),
	('d2ef6b058df325da6c23566b955dfee8bf32c0e20f500d190abf02096e73845f8fffa132b2270d12', 40, 6, 'Token de acesso pessoal', '[]', 0, '2019-11-05 16:17:34', '2019-11-05 16:17:34', '2020-11-05 16:17:34'),
	('da898f1a2762ddad878c64638fe8a9f6aae1728b43d787c7cae97e9a18d43becc83891c633231b0c', 28, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-05 15:38:13', '2019-11-05 15:38:13', '2020-11-05 15:38:13'),
	('de3958409b83994213129b52d97493798d21992f385951c55b3664c077cbef462c53ba0ecff8bca1', 27, 6, 'Token de acesso pessoal', '[]', 0, '2019-11-22 16:14:12', '2019-11-22 16:14:12', '2020-11-22 16:14:12'),
	('debd0a3443d7ef2b4892b77367024f04d10ebf68db057db3084959a7264675b34754cfa9f721cd92', 27, 6, 'Token de acesso pessoal', '[]', 0, '2019-10-18 16:22:24', '2019-10-18 16:22:24', '2020-10-18 16:22:24'),
	('e46ce63ad3ee16cafbeaffcb5b14cea45e9cc40c7e75f5cd4473aef451ec9f90068f24376286abe9', 28, 6, 'Token de acesso pessoal', '[]', 1, '2019-11-05 15:32:17', '2019-11-05 15:32:17', '2020-11-05 15:32:17'),
	('e602f2f67b12d8d5781ae9e392d6b218f3f642a2ec2fd273deb4562f192baf54fb67741dd948557f', 27, 6, 'Token de acesso pessoal', '[]', 1, '2019-10-11 16:18:03', '2019-10-11 16:18:03', '2020-10-11 16:18:03'),
	('edca3c605cf6acd0120e7309dee85f64459f4eefc94a727c5a0b8d1ac7b6a0aad9a2aa101fbcadc1', 27, 6, 'Token de acesso pessoal', '[]', 0, '2019-11-28 13:22:52', '2019-11-28 13:22:52', '2020-11-28 13:22:52');
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;

-- Copiando estrutura para tabela new.oauth_auth_codes
CREATE TABLE IF NOT EXISTS `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.oauth_auth_codes: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;

-- Copiando estrutura para tabela new.oauth_clients
CREATE TABLE IF NOT EXISTS `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.oauth_clients: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
	(6, NULL, 'Laravel Personal Access Client', 'WjmySLHDSdq3yAzo5Dc8IkdHTC4eaviZsqKQbeMA', 'http://localhost', 1, 0, 0, '2019-10-08 12:08:26', '2019-10-08 12:08:26'),
	(7, NULL, 'Laravel Password Grant Client', 'kjeC3WgkUl9xDYlPxOQs4MoYyoH6Y7tWhUlxjSro', 'http://localhost', 0, 1, 0, '2019-10-08 12:08:26', '2019-10-08 12:08:26');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;

-- Copiando estrutura para tabela new.oauth_personal_access_clients
CREATE TABLE IF NOT EXISTS `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.oauth_personal_access_clients: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
	(4, 6, '2019-10-08 12:08:26', '2019-10-08 12:08:26');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;

-- Copiando estrutura para tabela new.oauth_refresh_tokens
CREATE TABLE IF NOT EXISTS `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.oauth_refresh_tokens: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;

-- Copiando estrutura para tabela new.ordem
CREATE TABLE IF NOT EXISTS `ordem` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ordem` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `id_user` bigint(20) unsigned NOT NULL,
  `nivel` int(10) unsigned NOT NULL DEFAULT 0,
  `ativo` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ordem_id_user_foreign` (`id_user`),
  CONSTRAINT `ordem_id_user_foreign` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.ordem: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `ordem` DISABLE KEYS */;
INSERT INTO `ordem` (`id`, `ordem`, `id_user`, `nivel`, `ativo`, `created_at`, `updated_at`) VALUES
	(12, 'Teste 3', 27, 3, 1, '2019-10-29 13:20:18', '2019-10-29 13:20:18'),
	(13, 'Teste 4', 27, 2, 1, '2019-10-29 13:20:30', '2019-10-29 13:20:30');
/*!40000 ALTER TABLE `ordem` ENABLE KEYS */;

-- Copiando estrutura para tabela new.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.password_resets: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Copiando estrutura para tabela new.reuniao
CREATE TABLE IF NOT EXISTS `reuniao` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `data` date NOT NULL,
  `ativo` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.reuniao: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `reuniao` DISABLE KEYS */;
INSERT INTO `reuniao` (`id`, `data`, `ativo`, `created_at`, `updated_at`) VALUES
	(1, '2019-10-09', 0, '2019-10-09 12:29:25', '2019-10-09 12:29:26'),
	(2, '2019-10-16', 0, '2019-10-16 11:25:37', '2019-10-17 14:25:36'),
	(4, '2019-10-21', 0, '2019-10-17 14:12:35', '2019-10-22 16:54:06'),
	(5, '2019-10-28', 0, '2019-10-22 14:19:32', '2019-10-29 16:58:46'),
	(6, '2019-11-04', 0, '2019-10-29 12:03:36', '2019-11-05 16:54:17'),
	(7, '2019-11-11', 0, '2019-11-05 12:00:39', '2019-11-12 16:45:40'),
	(8, '2019-11-18', 0, '2019-11-12 12:03:25', '2019-11-19 16:03:34'),
	(9, '2019-11-25', 0, '2019-11-19 13:22:22', '2019-11-26 16:51:56'),
	(10, '2019-12-02', 1, '2019-11-26 12:26:38', '2019-11-26 12:26:38');
/*!40000 ALTER TABLE `reuniao` ENABLE KEYS */;

-- Copiando estrutura para tabela new.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `endereco` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cidade` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data_nasc` date NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nivel` int(11) NOT NULL DEFAULT 1,
  `cargo_id` bigint(20) unsigned NOT NULL,
  `profissao` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `avental_id` bigint(20) unsigned NOT NULL,
  `telefone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_cargo_id_foreign` (`cargo_id`),
  KEY `users_avental_id_foreign` (`avental_id`),
  CONSTRAINT `users_avental_id_foreign` FOREIGN KEY (`avental_id`) REFERENCES `avental` (`id`) ON DELETE CASCADE,
  CONSTRAINT `users_cargo_id_foreign` FOREIGN KEY (`cargo_id`) REFERENCES `cargos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela new.users: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `endereco`, `cidade`, `estado`, `data_nasc`, `email`, `nivel`, `cargo_id`, `profissao`, `avental_id`, `telefone`, `password`, `remember_token`, `email_verified_at`, `created_at`, `updated_at`) VALUES
	(1, 'Isabela', 'Fernandes', 'Rua dois', 'Bauru', 'SP', '2000-08-18', 'b@b.com', 1, 22, 'Chef', 1, '123123123', '$2y$10$FeLM22wfMbv3ye/QuXaXj.AW8ZuvMRvG536ChndpGN33B2swzp8Ye', NULL, '2019-10-14 12:45:14', NULL, '2019-11-20 15:58:08'),
	(27, 'Natalia', 'Sakai', 'Rua um', 'Bauru', 'SP', '2000-01-31', 'a@a.com', 1, 4, 'Estagiária', 1, '123456767', '$2y$10$KsmTPgyTcvmBjBEN9bL9IefRV/RM9bqrpfdKO4N/yKH4BTJ07n9aS', NULL, NULL, '2019-10-09 15:23:56', '2019-11-22 15:52:10'),
	(28, 'a', 'a', 'adada', 'asda', 'AM', '2019-10-17', 'c@c.com', 1, 20, 'Desempregada', 1, '123123123', '$2y$10$Y9qSWAGtXqpfXz7Eh4MVzOqr5pa9KIsKyKxBQmKuy6k0iOjLI.lg6', NULL, NULL, '2019-10-17 15:27:03', '2019-10-17 15:27:03'),
	(40, 'Daniela', 'Silva', 'qq', 'qq', 'AM', '2019-11-05', 'z@z.com', 1, 2, 'qq', 1, '12345678', '$2y$10$.r4X0Jz.PtzfczVAFk8jJeJEWhh1JLi5H6A47EnyjJt1YVJFb.s16', NULL, NULL, '2019-11-05 16:17:33', '2019-11-05 16:18:06'),
	(41, 'RM', 'Kim', 'rua dez', 'Rm', 'AM', '2014-11-05', 'rm@rm.com', 1, 25, 'singer', 1, '12345678', '$2y$10$1isXkOrrhEpR1IAuyG3BfOqDgnF0CKqgq.LZhW/WvIF4PfADjzkSe', NULL, NULL, '2019-11-05 16:27:46', '2019-11-05 16:28:07');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
