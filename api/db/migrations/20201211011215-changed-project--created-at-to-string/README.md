# Migration `20201211011215-changed-project--created-at-to-string`

This migration has been generated at 12/10/2020, 5:12:15 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "brief" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL
);
INSERT INTO "new_Project" ("id", "title", "brief", "description", "createdAt") SELECT "id", "title", "brief", "description", "createdAt" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201211002847-added-created-at..20201211011215-changed-project--created-at-to-string
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -24,6 +24,6 @@
   id          Int      @id @default(autoincrement())
   title       String
   brief       String
   description String
-  createdAt   DateTime
+  createdAt   String
 }
```


