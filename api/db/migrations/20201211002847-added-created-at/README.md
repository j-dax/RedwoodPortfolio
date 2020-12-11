# Migration `20201211002847-added-created-at`

This migration has been generated at 12/10/2020, 4:28:47 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "brief" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201211002847-added-created-at
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,29 @@
+datasource DS {
+  // optionally set multiple providers
+  // example: provider = ["sqlite", "postgresql"]
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = "native"
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+
+// model Post {
+//   id        Int      @id @default(autoincrement())
+//   title     String
+//   body      String
+//   createdAt DateTime @default(now())
+// }
+
+model Project {
+  id          Int      @id @default(autoincrement())
+  title       String
+  brief       String
+  description String
+  createdAt   DateTime
+}
```


