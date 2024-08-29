-- CreateTable
CREATE TABLE `complaint` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `branch` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `subject` VARCHAR(191) NOT NULL,
    `summary` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
