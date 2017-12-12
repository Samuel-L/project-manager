from rest_framework import routers

from tasks.views import TaskViewSet, ProjectViewSet


router = routers.SimpleRouter()
router.register(r'tasks/tasks', TaskViewSet, 'tasks')
router.register(r'tasks/projects', ProjectViewSet, 'projects')

urlpatterns = router.urls
