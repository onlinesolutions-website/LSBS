/*===================== SQL FOR WOWONDER EXISTING TABLES ===========================*/
alter table `videos` add `vy-live` enum('yes','no') not null default 'no';
alter table `users` add `vy-live-streamkey` varchar(99) not null default '';

/*===================== SQL TABLES FOR PLUGIN ===========================*/

DROP TABLE IF EXISTS `vy_live_comments`;
CREATE TABLE `vy_live_comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `comment` text not null default '',
  `post_id` int(50) NOT NULL,
  `added` int(33) NOT NULL,
  `user_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE = utf8mb4_unicode_ci;

ALTER TABLE `vy_live_comments`
  ADD PRIMARY KEY (`id`);
  
  ALTER TABLE `vy_live_comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

DROP TABLE IF EXISTS `vy_live_broadcasts`;
CREATE TABLE `vy_live_broadcasts` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(50) NOT NULL,
  `added` int(33) NOT NULL,
  `user_id` int(50) NOT NULL,
  `ended` enum('yes','no') not null default 'no',
  `time` varchar(90) not null default '0:00',
  `stream_name` text COLLATE utf8mb4_unicode_ci,
  `live-cover` text COLLATE utf8mb4_unicode_ci,
  `obs` enum('yes','no') not null default 'no',
  `islivenow` enum('yes','no') not null default 'no',
  `storage` varchar(50) not null default 'default'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE = utf8mb4_unicode_ci;

ALTER TABLE `vy_live_broadcasts`
  ADD PRIMARY KEY (`id`);
  
  ALTER TABLE `vy_live_broadcasts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

DROP TABLE IF EXISTS `vy_live_conf`;
CREATE TABLE `vy_live_conf` (
  `id` int(10) UNSIGNED NOT NULL,
  `settings` TEXT CHECK (JSON_VALID(settings))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE = utf8mb4_unicode_ci;

ALTER TABLE `vy_live_conf`
  ADD PRIMARY KEY (`id`);
  
  ALTER TABLE `vy_live_conf`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;


  DROP TABLE IF EXISTS `vy_live_products`;
CREATE TABLE `vy_live_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(50) NOT NULL,
  `post_id` int(50) NOT NULL,
  `broadcast_id` int(50) NOT NULL,
  `added` int(33) NOT NULL,
  `views` int(33) NOT NULL default '0',
  `units` int(33) NOT NULL default '0',
  `condition` enum('1','0') NOT NULL DEFAULT '0',
  `location` varchar(50) NOT NULL,
  `active` int(33) NOT NULL DEFAULT '1',
  `name` varchar(100) NOT NULL,
  `descr` text NOT NULL,
  `contact` varchar(50) NOT NULL,
  `price` varchar(50) NOT NULL,
  `discount_price` varchar(50) NOT NULL,
  `categ` text NOT NULL,
  `shipping_countries` text NOT NULL,
  `files` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE = utf8mb4_unicode_ci;

ALTER TABLE `vy_live_products`
  ADD PRIMARY KEY (`id`);
  ALTER TABLE `vy_live_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;


DROP TABLE IF EXISTS `vy_live_products_cart`;
CREATE TABLE `vy_live_products_cart` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(50) NOT NULL,
  `product_id` int(50) NOT NULL,
  `added` int(33) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE = utf8mb4_unicode_ci;

ALTER TABLE `vy_live_products_cart`
  ADD PRIMARY KEY (`id`);
  ALTER TABLE `vy_live_products_cart`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;